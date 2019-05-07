const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route  GET api/geojson/buses
// @desc   Get all available buses
// @access Public
router.get("/:universityID", (req, res) => {
  axios
    .get(`http://${req.params.universityID}.doublemap.com/map/v2/buses`)
    .then(buses => {
      let geojson = {
        type: "FeatureCollection",
        features: []
      };

      buses.data.map(bus => {
        geojson.features.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [bus.lon, bus.lat]
          },
          properties: {
            id: bus.id,
            name: bus.name,
            heading: bus.heading,
            route: bus.route,
            lastStop: bus.lastStop
          }
        });
      });
      res.json(geojson);
    })
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching bus data. Please try again in a moment."
      });
    });
});

module.exports = router;
