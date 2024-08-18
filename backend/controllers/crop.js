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
    return res.json(crops);
    } catch (error) {
    return res.status(400).json({
            err: error.message
          });       
    }
}

exports.getCropByName = async (req, res) => {
  const { cropname } = req.params; // Extract cropname from request parameters
  try {
      const crop = await Crop.findOne({ cropname: cropname }); // Find crop by cropname
      if (!crop) {
          return res.status(404).json({
              message: 'Crop not found',
          });
      }
      return res.json(crop); // Return the found crop
  } catch (error) {
      return res.status(500).json({
          err: error.message,
      });
  }
};
