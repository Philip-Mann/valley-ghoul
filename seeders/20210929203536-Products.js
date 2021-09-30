'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        product_name: 'Bloody Screams',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Black',
        product_quantity: '5',
        product_image: 'https://imgur.com/1InCDIv.jpg',
        product_description: 'Bloody ghost face killer for your inner Billy & Stu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Hearts Noir',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Black',
        product_quantity: '5',
        product_image: 'https://imgur.com/nn80t7A.jpg',
        product_description: 'Black hearts with a glittery gloss finish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Pink Planchettes',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Pink',
        product_quantity: '5',
        product_image: 'https://imgur.com/cZxmdJK.jpg',
        product_description: 'Shimmery pink planchettes with glow in the dark butterflies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'White Planchettes',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'White',
        product_quantity: '5',
        product_image: 'https://imgur.com/oZEmMEL.jpg',
        product_description: 'White planchettes with glow in the dark bats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Pumpkin Pies',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Orange',
        product_quantity: '5',
        product_image: 'https://imgur.com/KuvaTPT.jpg',
        product_description: 'Cute slices of pumkin pie and a dash of whip cream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Opal Butterflies',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Opal',
        product_quantity: '5',
        product_image: 'https://imgur.com/oux7pgI.jpg',
        product_description: 'Shimmery opal butterflies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Poptart Clips',
        product_type: 'Hair Clip',
        product_price: '20.00',
        product_colors: 'Pink',
        product_quantity: '5',
        product_image: 'https://imgur.com/oux7pgI.jpg',
        product_description: 'A pair of cute poptart hair clips',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: 'Hearts Noir Cut Out',
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Black',
        product_quantity: '5',
        product_image: 'https://imgur.com/LvEtVsO.jpg',
        product_description: 'Black hearts with a glittery gloss finish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_name: `Purple Night's Sky Hearts`,
        product_type: 'Earring',
        product_price: '15.00',
        product_colors: 'Purple',
        product_quantity: '5',
        product_image: 'https://imgur.com/2QTd6hM.jpg',
        product_description: 'Purple hearts with a glittery gloss night sky finish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
