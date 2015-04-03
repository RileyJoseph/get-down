"use strict";
module.exports = function(sequelize, DataTypes) {
  var Riley = sequelize.define("Riley", {
    inputURL: DataTypes.STRING,
    outputURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });





  return Riley;
};