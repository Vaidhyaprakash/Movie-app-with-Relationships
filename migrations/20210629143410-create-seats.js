'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seats', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      availableSeats: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      bookedSeats:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      ScreenId:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Seats');
  }
};