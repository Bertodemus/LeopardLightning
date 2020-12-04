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
  //Add association to belong to Event
  Comment.associate = models => {
    Comment.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};
