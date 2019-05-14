const University = require("../controllers/university");
const User = require("../controllers/user");
const Auth = require("../controllers/auth");
const Doublemap = require("../controllers/doublemap");
const Geojson = require("../controllers/geojson");
const auth = require("../middleware/auth");

module.exports = app => {
  app.route("/api/auth").post(Auth.authenticate);
  app.route("/api/auth/user").get(auth, Auth.getUser);
  app.route("/api/dashboard/:universityID");
  app.route("/api/universities").get(University.get);
  app.route("/api/doublemap/buses");
  app.route("/api/doublemap/buses/:busId");
  app.route("/api/doublemap/stops");
  app.route("/api/geojson/buses/:universityID").get(() => console.log("hi"));
  app.route("/api/geojson/routes/:universityID").get(Geojson.getRoutes);
  app.route("/api/geojson/stops/:universityID").get(() => console.log("hi"));
  app.route("/api/users").post(User.register);
};
