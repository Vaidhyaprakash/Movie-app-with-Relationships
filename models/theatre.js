'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theatre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Screen,Booked}) {
      // define association here
      this.hasMany(Screen,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        as:'SCREEN'
      });
      this.hasMany(Booked,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        as:'Booked'
      });
    }
  };
  Theatre.init({
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

  }, {
    sequelize,
    timestamps:false,
    modelName: 'Theatre',
  });
  return Theatre;
};