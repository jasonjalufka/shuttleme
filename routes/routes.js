const University = require("../controllers/university");
const User = require("../controllers/user");
const Auth = require("../controllers/auth");
const auth = require("../middleware/auth");

module.exports = app => {
  app.route("/api/auth").post(Auth.authenticate);
  app.route("/api/auth/user", auth).get(Auth.getUser);
  app.route("/api/dashboard");
  app.route("/api/universities").get(University.get);
  app.route("/api/doublemap/buses");
  app.route("/api/doublemap/stops");
  app.route("/api/geojson/buses");
  app.route("/api/geojson/route");
  app.route("/api/geojson/stops");
  app.route("/api/users").post(User.register);
};
