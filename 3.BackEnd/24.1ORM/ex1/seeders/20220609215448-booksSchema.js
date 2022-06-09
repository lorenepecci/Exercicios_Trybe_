'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'book of lorene',
          author: 'lorene',
          pageQuantity: 200
        },
        {
          title: 'book of douglas',
          author: 'douglas',
          pageQuantity: 100
        },  
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  },
};
