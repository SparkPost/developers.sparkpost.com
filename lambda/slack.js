const axios = require('axios')

/**
 * To clear the cache...
 *
 * curl -X DELETE https://jsonbin.org/JSON_USER/slack \
 *   -H 'authorization: token JSON_TOKEN'
 */

const { SLACK_TOKEN, JSON_USER, JSON_TOKEN } = process.env
const CACHE_TIME = 1000 * 60 * 3
const ERROR = new Error('Failed to fetch number of active slack users.')

exports.handler = async function(event, context, callback) {
  try {
    let data
    const cachedData = data = await getCachedData()

    if (shouldUpdateCache(data)) {
      try {
        data = await updateCachedData()
      }
      // if we fail to get the new data from slack re-grab the cached data
      catch(e) {
        data = cachedData
      }
    }

    callback(null, {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
  }
  catch (e) {
    console.log(e  && e.response ? e.response : e)
    callback(ERROR)
  }
}



async function getCachedData() {
  return axios({
    url: `https://jsonbin.org/${JSON_USER}/slack`,
    method: 'get',
    headers: {
      authorization: `token ${JSON_TOKEN}`
    }
  })
  .then(({ data }) => data)
  .catch((error) => {
    if (error.response.status === 404) {
      return null
    }

    return error
  })
}

/**
 * return true if it has been more than the CACHE_TIME since the last
 * update or there is no cache.
 *
 * @param  {Object} data - the cache
 */
function shouldUpdateCache(data) {
  if (!data) return true

  const now = new Date()
  const updateTime = new Date(data.updateAt)
  return now > updateTime
}


/**
 * query slack, update the cache, and return the new value
 */
async function updateCachedData() {
  const { data: slackData } = await axios.get(
    `https://sparkpost-community.slack.com/api/users.list?token=${SLACK_TOKEN}&presence=true`
  )

  const users = slackData.members

  if (!users || (users && !users.length)) {
    throw ERROR
  }

  const activeUserCount = users.filter(({ presence }) => {
    return presence === 'active'
  }).length

  const data = {
    count: activeUserCount,
    updateAt: new Date(new Date().getTime() + CACHE_TIME)
  }

  await axios({
    url: `https://jsonbin.org/${JSON_USER}/slack`,
    method: 'post',
    headers: {
      authorization: `token ${JSON_TOKEN}`
    },
    data: data
  })

  return data
}
