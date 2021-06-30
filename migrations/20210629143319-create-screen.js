'use strict';


module.exports = {
  up: async (queryInterface, DataTypes) => {
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
      screenName:{
        type:DataTypes.STRING,
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
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Screens');
  }
};