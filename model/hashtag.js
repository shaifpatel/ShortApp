module.exports = (sequelize, DataTypes) => {
    const hashtags = sequelize.define('hashtag', {
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        content: DataTypes.STRING,

    })
    return hashtags
}