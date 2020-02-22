const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZGltbGVpdmFkIiwiYSI6ImNrNXV0bjIwaTA2aWgzZG1kbzFmZmhxcWgifQ.v2_t6vz8VDytSW2upfZ3rg&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "Η σύνδεση με την υπηρεσία εντοπισμού είναι αδύνατη!",
        undefined
      );
    } else if (body.features.length === 0) {
      callback("Η εύρεση της τοποθεσίας είναι αδύνατη!", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
