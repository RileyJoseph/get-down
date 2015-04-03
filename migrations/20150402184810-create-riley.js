"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Rileys", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      inputURL: {
        type: DataTypes.STRING
      },
      outputURL: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Rileys").done(done);
  }
};