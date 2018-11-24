const faceRoute = require("./faceRoute")

module.exports = function setRouter(app){
    app.use(faceRoute)
}