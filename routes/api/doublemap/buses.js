const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const axios = require("axios");

// @route  GET api/doublemap/buses
// @desc   Get all available buses
// @access Public
router.get("/", (req, res) => {
  axios
    .get("http://txstate.doublemap.com/map/v2/buses")
    .then(stops => {
      console.log("Fetching buses data from doublemap...");
      res.json(stops.data);
    })
    .catch(err => {
      res.status(503).json({
        msg:
          "Something went wrong while fetching bus data. Please try again in a moment."
      });
    });
});

module.exports = router;
