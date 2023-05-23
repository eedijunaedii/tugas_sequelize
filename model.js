// model.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('biodata_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Biodata = sequelize.define('Biodata', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tempat_lahir: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tanggal_lahir: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync({ force: true }) // Sync database, set force: true to drop table on every sync
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = Biodata;
