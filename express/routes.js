module.exports = function(expressRouter) {
  require("../users/routes")(expressRouter);

  // add more routes as needed

  return expressRouter;
};
