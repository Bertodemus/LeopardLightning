// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
//Imports handlebars //DS-11/24
const Handlebars = require('handlebars')
const expressHandlebars = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


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


////////////////
// Handlebars.registerHelper("ifCond", function(v1, v2, options) {
//   if (v1 === v2) {
//     return options.fn(this);
//   }
//   return options.inverse(this);
// });
///////////////////





const hbs = expressHandlebars.create({
  helpers: {
    ifCond: function(v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  defaultLayout: "main"
});

// app.engine('handlebars', hbs.engine);






//***handlebars code, feel free to comment out if you need to work on the HTML //DS-11/24
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.engine("handlebars", expressHandlebars({handlebars: allowInsecurePrototypeAccess(Handlebars)}));

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

//Helper Function for Handlebars implementation

//***gives server access to routes //DS 11-24
// app.use(routes);

// Requiring our routes
app.use(routes);
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
