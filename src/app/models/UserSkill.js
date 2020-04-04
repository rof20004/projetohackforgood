import Sequelize, { Model } from 'sequelize';

class UserSkill extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        skillId: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "users_skills"
      }
    );

    return this;
  }
}

export default UserSkill;
