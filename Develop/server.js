const path = require('path');
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars here
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//authentication w/ cookies & session
const sess = {
  secret: 'password',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

app.use(cookieParser());

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
