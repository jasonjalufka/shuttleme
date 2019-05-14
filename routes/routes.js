const University = require("../controllers/university");
const User = require("../controllers/user");
const Auth = require("../controllers/auth");
const Doublemap = require("../controllers/doublemap");
const auth = require("../middleware/auth");

module.exports = app => {
  app.route("/api/auth").post(Auth.authenticate);
  app.route("/api/auth/user").get(auth, Auth.getUser);
  app.route("/api/dashboard/:universityID");
  app.route("/api/universities").get(University.get);
  app.route("/api/doublemap/buses");
  app.route("/api/doublemap/buses/:busId");
  app.route("/api/doublemap/stops");
  app.route("/api/geojson/buses/:universityID");
  app.route("/api/geojson/route/:universityID");
  app.route("/api/geojson/stops/:universityID");
  app.route("/api/users").post(User.register);
};
