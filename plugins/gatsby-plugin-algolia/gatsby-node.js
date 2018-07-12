const algoliasearch = require('algoliasearch');
const chunk = require('lodash.chunk');

/**
 * give back the same thing as this was called with.
 *
 * @param {any} obj what to keep the same
 */
const identity = obj => obj;

exports.onPostBuild = function(
  { graphql },
  { appId, apiKey, queries, indexName: mainIndexName, chunkSize = 1000 }
) {
  const client = algoliasearch(appId, apiKey);

  const jobs = queries.map(async function doQuery({
    indexName = mainIndexName,
    query,
    transformer = identity,
  }) {
    const index = client.initIndex(indexName);
    const tmpIndex = client.initIndex(`${indexName}_tmp`);

    // copy the index
    const { taskID: copyTaskID } = await client.copyIndex(index.indexName, tmpIndex.indexName, [ 'settings', 'synonyms', 'rules' ]);
    await tmpIndex.waitTask(copyTaskID);


    // clear the temp index
    const { taskID: clearTaskID } = await tmpIndex.clearIndex();
    await tmpIndex.waitTask(clearTaskID);

    // run the query, tranform the results, and push up the objects
    const result = await graphql(query);
    const objects = transformer(result);
    const chunks = chunk(objects, chunkSize);

    const chunkJobs = chunks.map(async function(chunked) {
      const { taskID } = await tmpIndex.addObjects(chunked);
      return tmpIndex.waitTask(taskID);
    });

    await Promise.all(chunkJobs);

    // move the temp index over to the original index
    const { taskID: moveTaskId } = await client.moveIndex(tmpIndex.indexName, index.indexName);
    return tmpIndex.waitTask(moveTaskId);
  });

  return Promise.all(jobs);
};
