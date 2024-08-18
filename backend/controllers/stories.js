const Stories = require("../models/stories")

exports.addStories = async(req,res)=>{
    try {
        const story = new Stories(req.body);
        const newStory = await story.save();
        res.json(newStory);
    } catch (error) {
        return res.status(400).json({
            err: error.message
          });      
    }
}

exports.getStoriesByType = async(req,res)=>{
    const {type} = req.params;
    try {
        const stories = await Stories.find({type:type});
        res.json(stories);
    } catch (error) {
        return res.status(500).json({
            err: error.message,
        });
    }
}