module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('user',{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING
})
return users
}