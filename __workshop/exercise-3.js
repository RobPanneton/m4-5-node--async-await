// Exercise 3
// ----------

// const doublesNow = (number) => {
//   return number * 2;
// };

const doublesLater = (num) => {
  // let myPromise = new Promise((resolve) => {
  //   setTimeout(resolve, 2000, num * 2);
  // });
  // return myPromise;
  console.log("doubling the number");
  return new Promise((resolve) => setTimeout(resolve, 2000, num * 2));
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const a = await doublesLater(num);
    const b = await doublesLater(a);
    const c = await doublesLater(b);
    return a + b + c;
  } catch (error) {
    console.log("error");
  }
};
// 4. verification
handleSum(10).then((ans) => console.log(ans));
