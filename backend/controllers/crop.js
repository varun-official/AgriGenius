const Crop = require("../models/crop")

exports.addCrop = async(req,res) =>{
    try {
    const crop  = new Crop(req.body);
    const createdCrop = await crop.save();
    return res.json(createdCrop);
    } catch (error) {
    return res.status(400).json({
            err: error.message
          });       
    }
}

exports.getAllCrop = async(req,res) =>{
    try {
    const crops = await Crop.find({});
    console.log('All crops:', crops);
    return res.json(crops);
    } catch (error) {
    return res.status(400).json({
            err: error.message
          });       
    }
}