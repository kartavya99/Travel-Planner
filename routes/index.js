const router = require("express").Router();
const { append } = require("express/lib/response");
const apiRoutes = require("./api");

append.use("/api", apiRoutes);

module.exports = router;
