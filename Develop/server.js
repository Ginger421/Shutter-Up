const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
<<<<<<< HEAD
=======
const exphbs = require("express-handlebars");

>>>>>>> 36a618ca97c09265071b49a32d07d05cca6214d0
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars here
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

<<<<<<< HEAD
app.use(routes);
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
>>>>>>> 36a618ca97c09265071b49a32d07d05cca6214d0

//authentication w/ cookies & session
const sess = {
  secret: "password",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
