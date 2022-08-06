const express = require("express");
const session = require("express-session");
const routes = require("./controllers");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

//handlebars here
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
