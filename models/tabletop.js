module.exports = function(sequelize, DataTypes){
    const Tabletop = sequelize.define("Tabletop", {
        title: {
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
        team_one_game: {
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
        team_two_game: {
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

    Tabletop.associate = (models) => {
        Tabletop.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };

    return Tabletop;
};