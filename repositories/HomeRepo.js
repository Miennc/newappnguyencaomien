export default ($axios) => ({
  getArticles(payload) {
    return $axios.get(`everything?q=${payload}&pageSize=10&apiKey=9f395695403c4ad08ded1cfaeec0aaab`)
  },
})
