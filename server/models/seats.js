'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Screen}) {
      // define association here
      //this.belongsTo(Screen);
    }
  };
  Seats.init({
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
    }
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Seats',
  });
  return Seats;
};