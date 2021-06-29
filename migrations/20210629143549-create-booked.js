'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      seatNumber: {
        type:DataTypes.ARRAY(DataTypes.INTEGER)
      },
      UserId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      MovieId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      TheatreId:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookings');
  }
};