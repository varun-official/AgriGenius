const Scheme = require("../models/scheme")

exports.addScheme = async(req,res)=>{
    try {
        const scheme = new Scheme(req.body);
        const newScheme = await scheme.save();
        res.json(newScheme);
    } catch (error) {
        return res.status(400).json({
            err: error.message
          });      
    }
}

exports.getAllScheme = async(req,res)=>{
    try {
        const scheme = await Scheme.find({});
        res.json(scheme);
    } catch (error) {
        return res.status(500).json({
            err: error.message,
        });
    }
}