const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route  GET api/geojson/route
// @desc   Get all available routes
// @access Public
// {id: 704,
// name: '10 - Bobcat Stadium',
// short_name: '10',
// description: '',
// color: 'D7D20C',
// path: [lat, lon, lat, lon, ...],
// start_time: '06:00:00',
// end_time: '20:50:00',
// schedule_url: 'http://www.shuttle.txstate.edu/routes/campus/route10.html',
// active: true,
// fields: {},
// stops: [ 3, 4, 31, 44, 36 ]}
router.get("/:universityID", (req, res) => {
  axios
    .get(`http://${req.params.universityID}.doublemap.com/map/v2/routes`)
    .then(routes => {
      let geojson = {
        type: "FeatureCollection",
        features: []
      };
      console.log(
        "Fetching route data from doublemap, ex:",
        routes.data[0].name
      );

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
      console.log("route geojson from server: ", geojson);
      res.json(geojson);
    })
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching route data. Please try again in a moment."
      });
    });
});

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

module.exports = router;
