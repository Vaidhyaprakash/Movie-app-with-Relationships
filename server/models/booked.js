'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booked extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie,Theatre,User,Screen}) {
      // define association here
      this.belongsTo(Movie,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        as:'MOVIE'
      });
      this.belongsTo(Theatre,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        as:'THEATRE'
      });
      this.belongsTo(User,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        as:'USER'});
      this.belongsTo(Screen,{
        foreignKey:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        as:'SCREEN'
      });
    }
  };
  Booked.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    seatNumber: {
      type:DataTypes.ARRAY(DataTypes.INTEGER)
    }
  }, {
    sequelize,
    timestamps:false,
    tableName:'Bookings',
    modelName: 'Booked',
  });
  return Booked;
};