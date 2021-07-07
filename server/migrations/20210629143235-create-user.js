"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("Users");
  },
};
