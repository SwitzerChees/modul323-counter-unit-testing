const { update } = require("./Update");
const { view } = require("./View");
const { app } = require("./App");
const { initModel } = require("./Model"); 

const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);
