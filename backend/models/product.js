"use strict";
const { Model } = require("sequelize");
const { slugify } = require("../helpers/slugs");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.hasMany(models.product_image);
      product.hasMany(models.product_link);
      product.belongsTo(models.brand, {
        foreignKey: "brandId",
      });
      product.belongsTo(models.category, {
        foreignKey: "categoryId",
      });
    }
  }
  product.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can't be empty!'",
          },
        },
      },
      harga: {
        type: DataTypes.NUMBER,
        validate: {
          notEmpty: {
            message: "harga can't be empty!'",
          },
        },
      },
      berat: {
        type: DataTypes.NUMBER,
        validate: {
          notEmpty: {
            message: "berat can't be empty!'",
          },
        },
      },
      brandId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "brandId can't be empty!'",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "categoryId can't be empty!'",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can't be empty!'",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (brand, options) {
          product.nama = slugify(product.nama);
        },
      },
      sequelize,
      modelName: "product",
    },
  );
  return product;
};
