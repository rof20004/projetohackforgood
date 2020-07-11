import Sequelize from 'sequelize';

import User from '../app/models/User';
import Skill from '../app/models/Skill';
import UserSkill from '../app/models/UserSkill';

import databaseConfig from '../config/database';

const models = { User, Skill, UserSkill };

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    Object.values(models).forEach(model => {
      model.init(this.connection);
    });

    Object.values(models).forEach(model => {
      if (typeof model.associate === 'function') {
        model.associate(models);
      }
    })
  }
}

export default new Database();
