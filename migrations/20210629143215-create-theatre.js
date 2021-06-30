'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Theatres', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      screens:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      pincode:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      date:{
        type:DataTypes.DATE,
        allowNull:false
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Theatres');
  }
};