const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// BodyParser Middleware
app.use(express.json());

// DB Config
const db = config.get("mongoURI");

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/doublemap/stops", require("./routes/api/doublemap/stops"));
app.use("/api/doublemap/buses", require("./routes/api/doublemap/buses"));
app.use("/api/geojson/route", require("./routes/api/geojson/route"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
