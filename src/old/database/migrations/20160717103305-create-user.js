module.exports = {

  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // todoId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   allowNull: false,
      //   references: {
      //     model: 'Todos',
      //     key: 'id',
      //     as: 'todoId',
      //   },
      // },
    }),

  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('User'),
};

