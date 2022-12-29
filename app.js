const express = require('express')
const hashtagRouter = require('./routes/hashtagRouter')
const userRouter = require('./routes/userRouter')
const app =express()
const port = 3000
const db =require('./model/index')

require('./model/index')



app.use(express.json())

app.use('/users',userRouter)
app.use('/hashtag',hashtagRouter)


app.listen(port,()=>{
    console.log(`app is listing http://localhost:${port}`)
})