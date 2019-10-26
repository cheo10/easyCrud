const controller = require("./controller");

module.exports = function(router) {
  router.get("/users", controller.getUsers);
};
