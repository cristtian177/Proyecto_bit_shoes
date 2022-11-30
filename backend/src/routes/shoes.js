const express = require("express");
const router = express.Router();

const Shoes = require("../models/shoes.model");

router.post("/create-Shoes", async (req, res) => {
    const newShoes = new Shoes(req.body)
    await newShoes.save()
    return res.status(201).json({msg: "Shoeso guardado exitosamente"})
})

router.delete("/delete-Shoes", async (req, res) => {
    await Shoes.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Shoeso eliminado", id : req.query.id})
})

router.put("/update-Shoes", async (req, res) => {

    await Shoes.findByIdAndUpdate(req.query.id, {$set: req.body})
    return res.status(200).json({msg: "Shoeso actulizado", id : req.query.id})
})

router.get("/get-Shoes", async (req, res) => {

    const shoes = await Shoes.find()
    return res.status(200).json({data: shoes})

})

module.exports = router;