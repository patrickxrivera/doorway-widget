const models = require("../../models")

class User {
  static async create(email) {
    return models.user.create({ email });
  }
}

module.exports = User;