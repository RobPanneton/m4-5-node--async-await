const request = require("request-promise");

const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
};

const getDadJoke = async () => {
  const content = await request(options);
  const parsedContent = JSON.parse(content);
  return parsedContent.joke;
};

// getDadJoke

// 4.1

getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
