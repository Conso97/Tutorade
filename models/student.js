const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Student extends Model {

}

Student.init(
  {
    name_first: DataTypes.STRING,
    name_last: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    notes: DataTypes.TEXT,
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;