module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('user_roles', {
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            roleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Roles',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('user_roles');
    },
};