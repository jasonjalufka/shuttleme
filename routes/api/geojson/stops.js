const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route  GET api/geojson/stops
// @desc   Get all available and active stops
// @access Public
router.get("/:universityID", (req, res) => {
  let stopData, routeData;

  let getStops = () => {
    return axios.get(
      `http://${req.params.universityID}.doublemap.com/map/v2/stops`
    );
  };

  let getRoutes = () => {
    return axios.get(
      `http://${req.params.universityID}.doublemap.com/map/v2/routes`
    );
  };

  axios
    .all([getStops(), getRoutes()])
    .then(
      axios.spread((stops, routes) => {
        let activeStops = getActiveStops(routes.data);

        let geojson = {
          type: "FeatureCollection",
          features: []
        };

        stops.data
          .filter(stop => activeStops.includes(stop.id))
          .map(stop => {
            geojson.features.push({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [stop.lon, stop.lat]
              },
              properties: {
                id: stop.id,
                name: stop.name,
                buddy: stop.buddy
              }
            });
          });
        res.json(geojson);
      })
    )
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching stop data. Please try again in a moment."
      });
    });
});

module.exports = router;

const getActiveStops = routes => {
  let jointArray = [];
  routes.forEach(route => {
    jointArray = [...jointArray, ...route.stops];
  });
  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
};
