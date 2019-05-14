const University = require("../controllers/university");
const User = require("../controllers/user");
const Auth = require("../controllers/auth");
const Dashboard = require("../controllers/dashboard");
const Geojson = require("../controllers/geojson");
const auth = require("../middleware/auth");

module.exports = app => {
  // @route  POST api/auth
  // @desc   Authenticate a user using email/password
  // @access Public
  app.route("/api/auth").post(Auth.authenticate);
  // @route  GET api/auth/user
  // @desc   Get information of currently logged in user
  // @access Private
  app.route("/api/auth/user").get(auth, Auth.getUser);
  app.route("/api/dashboard/:universityID").get(Dashboard.getDashboard);
  // @route  GET api/universities
  // @desc   Get all university data
  // @access Public
  app.route("/api/universities").get(University.get);
  // @route  GET api/geojson/buses/:universityID
  // @desc   Get all bus data for university in geojson format
  // @access Public
  app.route("/api/geojson/buses/:universityID").get(Geojson.getBuses);
  // @route  GET api/geojson/routes/:universityID
  // @desc   Get all route data for university in geojson format
  // @access Public
  app.route("/api/geojson/routes/:universityID").get(Geojson.getRoutes);
  // @route  GET api/geojson/stops/:universityID
  // @desc   Get all active stop data for university in geojson format
  // @access Public
  app.route("/api/geojson/stops/:universityID").get(Geojson.getStops);
  // @route  POST api/users
  // @desc   Register a new user
  // @access Public
  app.route("/api/users").post(User.register);
};
