'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Screens', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      totalSeats: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      MovieId:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },
      TheatreId:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Screens');
  }
};