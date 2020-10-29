// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  const request = req.params.type;
  console.log(request);
  if (request === "dad") {
    const joke = await getDadJoke();
    res.status(200).json({
      status: 200,
      data: `${joke}`,
    });
  } else if (request === "tronald") {
    const joke = await getTronaldDumpQuote();
    res.status(200).json({
      status: 200,
      data: `${joke}`,
    });
  } else if (request === "geek") {
    const joke = await getGeekJoke();
    res.status(200).json({
      status: 200,
      data: `${joke}`,
    });
    return getGeekJoke();
  } else {
    return "this failed";
  }
};

module.exports = { handleJoke };
