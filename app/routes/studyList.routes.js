const controller = require("../controllers/studyList.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    app.post("/api/test/studyList", controller.createStudyList);

    app.get("/api/test/studyList", controller.listStudyList);
    
    app.put("/api/test/studyList",controller.listStudyList);
};