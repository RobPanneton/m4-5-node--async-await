// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getLatitude = (object) => {
  myPromise = new Promise((resolve, reject) => {
    resolve(object.latitude);
  });
  return myPromise;
};

const getLongitude = (object) => {
  myPromise = new Promise((resolve, reject) => {
    resolve(object.longitude);
  });
  return myPromise;
};

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = await JSON.parse(response);
    const latitude = await getLatitude(issLocation.iss_position);
    const longitude = await getLongitude(issLocation.iss_position);
    return {
      lat: latitude,
      lng: longitude,
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

getIssPosition().then((result) => console.log(result));
