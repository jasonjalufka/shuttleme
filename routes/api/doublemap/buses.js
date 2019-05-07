const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const axios = require("axios");

// @route  GET api/doublemap/buses
// @desc   Get all available buses
// @access Public
// @res.data:
// {
//   id: 441,
//   name: '441',
//   lat: 29.88946,
//   lon: -97.92563,
//   heading: 227,
//   route: 680,
//   lastStop: 3,
//   fields: {},
//   bus_type: 'bus',
//   lastUpdate: 1553894933,
//   capacity: 60,
//   load: 0
// }
router.get("/", (req, res) => {
  axios
    .get("http://txstate.doublemap.com/map/v2/buses")
    .then(buses => {
      res.json(buses.data);
    })
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching bus data. Please try again in a moment."
      });
    });
});

// @route  GET api/doublemap/buses/busID
// @desc   Get information of specified bus
// @access PUBLIC
router.get("/:busId", (req, res) => {
  axios
    .get("http://txstate.doublemap.com/map/v2/buses")
    .then(buses => {
      let result = buses.data.filter(bus => bus.id == req.params.busId);
      res.json(result[0]);
    })
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching bus data. Please try again in a moment."
      });
    });
});

module.exports = router;
