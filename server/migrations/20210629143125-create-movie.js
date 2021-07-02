'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Movies', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      title: {
        type: DataTypes.STRING,
        allowNull:false
      },
      hero:{
        type: DataTypes.STRING
      },
      heroine:{
        type:DataTypes.STRING
      },
      director:{
        type:DataTypes.STRING
      },
      durationInHrs:{
        type:DataTypes.FLOAT
      },
      releaseDate:{
        type:DataTypes.DATEONLY
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Movies');
  }
};