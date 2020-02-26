const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/28174668dee5f8b804fe2894e5a87ba1/" +
    latitude +
    "," +
    longitude +
    "?units=si&lang=el";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Η σύνδεση με την υπηρεσία καιρού είναι αδύνατη!", undefined);
    } else if (body.error) {
      callback("Η εύρεση της τοποθεσίας είναι αδύνατη!", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} Αυτή τη στιγμή η θερμοκρασία είναι ${body.currently.temperature} βαθμοί Κελσίου. Η υψηλότερη θερμοκρασία για σήμερα θα είναι ${body.daily.data[0].temperatureHigh} ενώ η χαμηλότερη ${body.daily.data[0].temperatureLow}. Η πιθανότητα βροχής είναι ${body.currently.precipProbability} %.`
      );
    }
  });
};

module.exports = forecast;
