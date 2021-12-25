"use strict";
const { Model } = require("sequelize");
const { slugify } = require("../helpers/slugs");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      belongsToMany(models.brand, {
        through: "models.product",
        foreignKey: "product.categoryId",
      });
    }
  }
  category.init(
    {
      nama: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can't be empty!'",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "slug can't be empty!'",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: function (brand, options) {
          brand.nama = slugify(brand.nama);
        },
      },
      sequelize,
      modelName: "category",
    },
  );
  return category;
};
