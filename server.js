const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

//setting up express server
const app =express();
const PORT = process.env.PORT || 3001;

//importing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force:false }).then(() => { app.listen(PORT, ()=> console.log("NOW listening"));
 });
