const controller = require("../controllers/community.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    app.post("/api/test/community", controller.uploadComment);

    app.get("/api/test/community", controller.listComment);

    // app.get("/api/test/community/:id", controller.listComment);


    // Delete a Tutorial with id
    // app.delete("/api/test/community/:id", controller.removeCommunity);
};