// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
//Imports handlebars //DS-11/24
const exphbs = require("express-handlebars");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const routes = require("./routes/eventRoutes.js");


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

//***handlebars code, feel free to comment out if you need to work on the HTML //DS-11/24
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//***gives server access to routes //DS 11-24
// app.use(routes);

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
