const mongoose = require("mongoose")

const DbName = 'bit-shoes'
const uri = `mongodb+srv://cris:1234@dbcluster.91tdpvh.mongodb.net/${DbName}?retryWrites=true&w=majority`

mongoose.connect( uri )
    .then((db) => console.log('Success'))
    .catch((err) => console.log(err))

module.exports = mongoose