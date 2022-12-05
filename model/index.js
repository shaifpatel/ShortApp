const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize('employee','root','',{
    host:"localhost",
    dialect:"mysql",
    logging:false
})
sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("error")
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.users = require('./user')(sequelize,DataTypes)
db.hashtags = require('./hashtag')(sequelize,DataTypes)



db.sequelize.sync()
.then(()=>{
    console.log("sync")
})

module.exports = db

