require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    port: 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    port: 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    port: 5432,
    "dialect": "postgres",
    "dialectOptions": {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    }
  }
};

// npx sequelize-cli model:generate --name Products --attributes product_name:string,product_type:string,product_price:string,product_colors:string,product_quantity:string,product_image:string,product_description:text