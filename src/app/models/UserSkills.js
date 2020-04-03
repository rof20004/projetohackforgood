'use strict';
module.exports = (sequelize, DataTypes) => {
  const userSkills = sequelize.define('userSkills', {
    userId: DataTypes.INTEGER
  }, {});
  userSkills.associate = function(models) {
    // associations can be defined here
  };
  return userSkills;
};