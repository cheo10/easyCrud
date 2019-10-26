const Users = require("./users");

class controller {
  static async getUsers(req, res, next) {
    try {
      const results = await Users.listAll();
      res.status(200).send(`all users:\n${JSON.stringify(results)}`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = controller;
