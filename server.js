const express = require("express");
const exphbs  = require("express-handlebars");
const mongoose = require("mongoose");

var db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(".hbs", exphbs({ 
    defaultLayout: "main",
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

db.on("error", function(error) {
    console.log("Mongoose DB Error: ", error);
});

const htmlRoutes = require("./routes/html-routes");
app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });