// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const controller = require("../controllers/Controller");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render(path.join(__dirname, "../views/login"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render(path.join(__dirname, "../views/members"));
  });
};

//made it render handlebar files, feel free to change back to the html if you need to //DS-11/24
