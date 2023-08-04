const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Example', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true 
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // sacamos las dos ultimas columnas que muestran las fechas y hora modificaciones 
  });
  };