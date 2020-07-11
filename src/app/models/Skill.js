import Sequelize, { Model } from 'sequelize';

class Skill extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, { through: models.UserSkill, as: 'users', foreignKey: 'skillId' });
  }
}

export default Skill;
