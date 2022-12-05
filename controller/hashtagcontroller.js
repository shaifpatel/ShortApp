const db = require('../model/index')
const Hashtag = db.hashtags

//////    creathashtags        ////////
const createhashtags = async (req, resp) => {

    const data = await Hashtag.create({
        userId: req.userId,
        content: req.body.content,
    })
    resp.status(201).json({ data: data, message: "hashtag create successfully created" })
}

/////////   gethashtag   //////////
const getHashtag = async (req, resp) => {
    const data = await Hashtag.findAll({ where: { userId: req.userId } })
    resp.status(200).json({ data: data, message: "all hashtag retrive" })
}

////////   getAllHashtag     //////////
const getallhashtag = async (req, resp) => {
    const data = await Hashtag.findAll({})
    resp.send(data)
}

module.exports = {
    createhashtags,
    getHashtag,
    getallhashtag

}