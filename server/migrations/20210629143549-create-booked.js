'use strict';


module.exports = {
  up: async (queryInterface, DataTypes) => {
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
      USERId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      MOVIEId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      THEATREId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      SCREENId:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Bookings');
  }
};