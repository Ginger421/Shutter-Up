require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const controllers = require("./controllers");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars here
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


//authentication w/ cookies & session
const sess = {
  secret: "password",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
  );
});
