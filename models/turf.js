module.exports = function(sequelize, DataTypes){
    const Turf = sequelize.define("Turf", {
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
        team_one_player: {
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
        team_two_player: {
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

    Turf.associate = (models) => {
        Turf.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };

    return Turf;
};