const request = require("request-promise");

const options = {
  url: "https://geek-jokes.sameerkumar.website/api?format=json",
  method: "GET",
};

const getGeekJoke = async () => {
  const joke = await request(options, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      return body;
    }
  });
  const parsedJoke = JSON.parse(joke);
  return parsedJoke.joke;
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
