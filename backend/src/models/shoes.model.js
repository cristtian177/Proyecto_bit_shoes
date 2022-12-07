const mongoose = require("mongoose")

const { Schema } = mongoose

const shoes_Schema = new Schema ( 
    {

        name:        {type: String, required: true},
        person:   {type: String,  required: true || ''},
        category:    {type: String, required: true},
        price:       {type: Number, required: true},
        description: {type: String, required: true || 'Description no disponoble por el momento'},
        image:       {type: String, required: true || 'Image no Disponible'},
        stock:       {type: Number, required: true || 0},
        keyWords:    {type: String, default: []},
        size:        {type: String, required: true},

    },
    {
        versionKey: false, 
        timestamps: true,
    }
)
module.exports = mongoose.model( "shoes" , shoes_Schema)
 