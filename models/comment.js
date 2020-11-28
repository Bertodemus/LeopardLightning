<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define(
    "Comment",
    {
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  Comment.associate = models => {
    Comment.belongsToMany(models.Event, {
      through: "event_comment",
      as: "events",
      foreignKey: "comment_id"
    });
  };

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};
=======
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
        Comment.belongsToMany(models.Event, {
            through: "event_comment",
            as: "events",
            foreignKey: "comment_id",
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
>>>>>>> 4befe98f529aea6a0cec3f21891df57609b8d7d3
