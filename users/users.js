const dbClient = require("../db/dbClient");

class Users {
  static async listAll() {
    try {
      return await dbClient.query("SELECT * FROM users");
    } catch (error) {
      throw "getUsers error: " + JSON.stringify(error);
    }
  }

  static async create() {}

  static async delete() {}

  static async edit() {}
}

module.exports = Users;
