function serializeApiReference(hit) {
  if (hit.actionName) {
    return {
      to: hit.objectID,
      title: hit.actionName,
      category:
        hit.actionName === hit.resGroupName ? hit.resName : hit.resGroupName,
    }
  } else if (hit.resName) {
    return {
      to: hit.objectID,
      title: hit.resName,
      category: hit.resGroupName,
    }
  } else if (hit.resGroupName) {
    return {
      to: hit.objectID,
      title: hit.resGroupName,
      category: 'SparkPost API',
    }
  } else {
    return {
      to: hit.objectID,
      title: hit.sectionName,
      category: 'SparkPost API',
    }
  }
}

export default function serializeHit(hit) {
  // documentation or blog post
  if (hit.post_type === 'support_article' || hit.post_type === 'post') {
    return {
      to: hit.permalink,
      title: hit.post_title,
      content: hit.content
    }
  }

  return serializeApiReference(hit)
}
