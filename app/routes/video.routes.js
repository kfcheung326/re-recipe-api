const controller = require("../controllers/video.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    app.post("/api/test/video", controller.uploadVideo);

    app.get("/api/test/video", controller.listVideo);

};