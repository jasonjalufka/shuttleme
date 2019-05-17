const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
// const config = require("config");
const path = require("path");
const app = express();

// BodyParser Middleware
app.use(express.json());

// DB Config
const db = process.env.DATABASE_URL;

console.log(process.env.DATABASE_URL);

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Require all routes in routes.js and pass app context
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
