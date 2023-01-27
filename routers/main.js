const express = require('express');
const request = require('request');
const options = require('../request-options')

const router = express.Router()

router.get('/', async (req, res) => {
    let jokes = null;
    let sensitive = req.query.sensitive_topics ? "": "?blacklistFlags=nsfw,religious,political,sexist,explicit"

    var get = {
      method: 'GET',
      url: 'https://v2.jokeapi.dev/joke/Any' + sensitive,
      qs: {amount: req.query.jokes_number, lang: req.query.language_select, type: "single"},
    }
    await request(get, function (error, response, body) {
        // console.log(get)
        if (error) throw new Error(error);
        body = JSON.parse(body)
        jokes = body.jokes
        res.render('index', {
            jokes: jokes,
            helpers: {
                even: function (value, options) { 
                    if (value % 3 === 0 && value != 0){
                        return options.fn(this)
                    }
                    else{
                        return options.inverse(this);
                    }
                }
            }
        })
    });
})



module.exports = router;