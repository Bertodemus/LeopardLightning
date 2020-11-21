module.exports = function(sequelize, DataTypes){
    const Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        team_one_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_one_win: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        team_one_loss: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        team_one_genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_one_votes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        team_two_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_two_win: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        team_two_loss: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        team_two_genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_two_votes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
        freezeTableName: true
    });

    Event.associate = (models) => {
        Event.belongsToMany(models.Comment, {
            through: "event_comment",
            as: "comments",
            foreignKey: "event_id",
          });
    };

    return Event;
};