const axios = require("axios");

exports.getRoutes = (req, res) => {
  let { universityID } = req.params;
  axios
    .get(`http://${universityID}.doublemap.com/map/v2/routes`)
    .then(routes => {
      let geojson = {
        type: "FeatureCollection",
        features: []
      };

      routes.data.map(route => {
        geojson.features.push({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: chunkArray(route.path, 2)
          },
          properties: {
            id: route.id,
            name: route.name,
            short_name: route.short_name,
            color: "#" + route.color,
            start_time: route.start_time,
            end_time: route.end_time,
            schedule_url: route.schedule_url,
            stops: route.stops
          }
        });
      });
      res.json(geojson);
    })
    .catch(err => {
      res.status(503).json({
        msg: "Something went wrong fetching route data"
      });
    });
};

let chunkArray = (arr, chunkSize) => {
  let index = 0,
    arrayLength = arr.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    let myChunk = arr.slice(index, index + chunkSize);
    myChunk.reverse();
    tempArray.push(myChunk);
  }
  return tempArray;
};
