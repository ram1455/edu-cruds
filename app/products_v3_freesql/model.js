const freesql = require('../../config/freesqldb.js')
const {DataTypes } = require('sequelize');

const Product = freesql.define('Product', {
  // Model attributes are defined here
  users_id:{
    type: DataTypes.INTEGER,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },

  image_url : {
    type : DataTypes.TEXT
  }
});

module.exports = Product;