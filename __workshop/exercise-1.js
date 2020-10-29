// Exercise 1
// ------------

const request = require("request-promise");

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject("Error: Not all items in the array are strings!");
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.sort())
      : reject("Error: Something went wrong with sorting words.");
  });
};

const turnArrayIntoStringArray = (array) => {
  const stringArray = array.map((word) => {
    return String(word);
  });
  return stringArray;
};

const textTransform = async (array) => {
  try {
    const stringArray = await turnArrayIntoStringArray(array);
    const capsArray = await makeAllCaps(stringArray);
    const sortedArray = await sortWords(capsArray);
    return sortedArray;
  } catch (error) {
    console.error(error);
  }
};

textTransform(["cucumber", "tomatos", "avocado"]);
textTransform(["cucumber", 44, true]);

textTransform(["cucumber", "tomatos", "avocado"]).then((result) =>
  console.log(result)
);
textTransform(["cucumber", 44, true]).then((result) => console.log(result));
