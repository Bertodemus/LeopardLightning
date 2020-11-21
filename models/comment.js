module.exports = function(sequelize, DataTypes){
    const Comment = sequelize.define("Comment", {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Couch, {
        });
    };

    Comment.associate = (models) => {
        Comment.belongsTo(models.Tabletop, {
        });
    };

    Comment.associate = (models) => {
        Comment.belongsTo(models.Turf, {
        });
    };

    Comment.associate = (models) => {
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
};