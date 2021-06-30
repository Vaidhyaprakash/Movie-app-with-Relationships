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
      this.belongsTo(Movie,{as:'MOVIE'});
      this.belongsTo(Theatre,{as:'THEATRE'});
      this.belongsTo(User,{as:'USER'});
      this.belongsTo(Screen,{as:'SCREEN'});
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