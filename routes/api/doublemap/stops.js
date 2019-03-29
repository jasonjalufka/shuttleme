const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const axios = require("axios");

// @route  GET api/doublemap/stops
// @desc   Get all available stops
// @access Public
router.get("/", (req, res) => {
  axios
    .get("http://txstate.doublemap.com/map/v2/stops")
    .then(stops => {
      console.log("Fetching stop data from doublemap...");
      let stopData = stops.data.map(stop => {
        return {
          id: stop.id,
          name: stop.name
        };
      });
      stopData.sort(compare);
      res.json(stopData);
    })
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching stops. Please try again in a moment."
      });
    });
});

// Sort stops by id before returning to client
const compare = (a, b) => {
  const stopA = a.id;
  const stopB = b.id;

  let comparison = 0;
  if (stopA > stopB) {
    comparison = 1;
  } else if (stopA < stopB) {
    comparison = -1;
  }
  return comparison;
};

module.exports = router;
