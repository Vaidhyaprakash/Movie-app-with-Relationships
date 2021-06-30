'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
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
        }
      });
    }
  };
  Movie.init({
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
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Movie',
  });
  return Movie;
};