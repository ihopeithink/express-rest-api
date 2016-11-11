/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('posts', {
	id: {
	    type: DataTypes.INTEGER(11),
	    allowNull: false,
	    primaryKey: true,
	    autoIncrement: true
	},
	title: {
	    type: DataTypes.STRING,
	    allowNull: true
	},
	content: {
	    type: DataTypes.STRING,
	    allowNull: true
	}
    }, {
	tableName: 'posts',
	timestamps: false,
	createdAt: false,
	updatedAt: false
    });
};
