const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

const app = express();

// BodyParser Middleware
app.use(express.json());

// DB Config
const db = process.env.DATABASE_URL || config.get("mongoURI");

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
// app.use("/api/users", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/doublemap/stops", require("./routes/api/doublemap/stops"));
// app.use("/api/doublemap/buses", require("./routes/api/doublemap/buses"));
// app.use("/api/geojson/route", require("./routes/api/geojson/route"));
// app.use("/api/geojson/stops", require("./routes/api/geojson/stops"));
// app.use("/api/geojson/buses", require("./routes/api/geojson/buses"));
// app.use("/api/dashboard", require("./routes/api/dashboard"));

require("./routes/routes")(app);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // Serve static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
