// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const controller = require("../controllers/userController");
const router = require("../routes/eventRoutes");
const event = require("../controllers/eventController.js");


// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", router);

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("members", {layout: "auth.handlebars"});
    }
    res.render("login", {layout: "auth.handlebars"});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members", {layout: "auth.handlebars"});
  });

  app.get("/signup", (req, res) => {
    res.render("signup", {layout: "auth.handlebars"});
  });


  app.get("/event/Couch", router);
  app.get("/event/Table", router);

  app.get("/event/Couch/1", router);


  // app.get("/couch-event", (req, res) => {
  //   res.render("couch_event", {layout: "main.handlebars"});
  // });

  app.get("/couch", (req, res) => {
    res.render("couch", {layout: "main.handlebars"});
  });

  // app.get("/table-event", (req, res) => {
  //   res.render("table_event", {layout: "main.handlebars"});
  // });

  app.get("/table", (req, res) => {
    res.render("table", {layout: "main.handlebars"});
  });

  app.get("/turf-event", (req, res) => {
    res.render("turf_event", {layout: "main.handlebars"});
  });

  app.get("/turf", (req, res) => {
    res.render("turf", {layout: "main.handlebars"});
  });

};

//made it render handlebar files, feel free to change back to the html if you need to //DS-11/24
