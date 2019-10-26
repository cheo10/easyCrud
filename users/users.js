const dbClient = require("../db/dbClient");

class Users {
  static async listAll() {
    try {
      let statement = "SELECT user_name FROM users";
      return await dbClient.query(statement);
    } catch (error) {
      throw "getUsers error: " + JSON.stringify(error);
    }
  }

  static async create() {}

  static async delete() {}

  static async edit() {}

  static async addToGroup() {}

  static async deleteFromGroup() {}

  static async editGroup() {}
}

module.exports = Users;
