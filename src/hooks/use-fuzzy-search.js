import Fuse from 'fuse.js'

const useFuzzySearch = (list, keys, query, { minScore = 50 } = {}) => {
  if (!query) {
    return list
  }
  const score = (100 - minScore) * 0.01
  const fuse = new Fuse(list, {
    keys,
    includeScore: true,
    ignoreLocation: true,
  })
  return fuse
    .search(query)
    .map((result) => {
      if (result.score <= score) {
        console.log(result)
        return result.item
      }
    })
    .filter(Boolean)
}

export default useFuzzySearch
