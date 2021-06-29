'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Screen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie,Theatre,Seats}) {
      // define association here
      this.belongsTo(Movie);
      this.belongsTo(Theatre);
      this.hasMany(Seats,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        }
      });
    }
  };
  Screen.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Screen',
  });
  return Screen;
};