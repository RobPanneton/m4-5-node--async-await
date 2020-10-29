const request = require("request-promise");

// const object = {
//   uri: "https://api.tronalddump.io",
//   headers: { Accept: "application/json" },
// };

const options = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
    json: true,
  },
};

const getTronaldDumpQuote = async () => {
  const content = await request(options);
  const parsedContent = JSON.parse(content);
  return parsedContent.value;
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
