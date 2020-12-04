module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define(
    "Event",
    {
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
      team_one_stat: {
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
      team_two_stat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      team_two_votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      freezeTableName: true
    }
  );
  //Add associations for User and Comments
  Event.associate = function(models) {
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Event.associate = function(models) {
    Event.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };

  return Event;
};
