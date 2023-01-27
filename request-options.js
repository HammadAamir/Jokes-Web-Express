const options = {
  get: {
    method: 'GET',
    url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit',
    qs: {amount: 10, type: "single", lang: "de"},
  }
}

module.exports = options