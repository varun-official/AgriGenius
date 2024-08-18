const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the disease field
const DiseaseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { _id: false });

// Schema for Fertilizer Schedule
const FertilizerSchema = new Schema({
    monthRange: {
      type: String,
      required: true,
      enum: [
        'Jan-Feb', 'Feb-Mar', 'Mar-Apr', 'Apr-May', 'May-Jun', 'Jun-Jul', 
        'Jul-Aug', 'Aug-Sep', 'Sep-Oct', 'Oct-Nov', 'Nov-Dec', 'Dec-Jan'
      ],
    },
    description: {
      type: String,
      required: true,
    },
  }, { _id: false });

// Main Crop Schema
const CropSchema = new Schema({
  subcrops: [{
    type: String,
    required: true,
  }],
  disease: {
    type: [DiseaseSchema], // Updated to an array of objects
    required: true,
  },
  waterManagement: {
    type: [String],
    required: true,
  },
  organicFertilizer: {
    type: [FertilizerSchema],
    required: true,
  },
  chemicalFertilizer: {
    type: [FertilizerSchema],
    required: true,
  },
  soiltype: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  youtubeLinks: {
    type: [String],
    validate: {
      validator: function(v) {
        return v.every(url => /https?:\/\/(www\.)?youtube\.com\/watch\?v=/.test(url));
      },
      message: 'Invalid YouTube link(s)',
    },
    required: true,
  },
  irrigation: {
    type: String,
    required: true,
  },
  cropImageUrl: {
    type: String,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Invalid URL',
    },
    required: true,
  },
  harvesting: {
    type: [String],
    required: true,
  },
  soilPreparation: {
    type: [String],
    required: true,
  },
  seeding: {
    type: [String],
    required: true,
  },
  variety: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  bannerImageUrl: {
    type: [String],
    validate: {
      validator: function(v) {
        return v.every(url => /^https?:\/\/.+/.test(url));
      },
      message: 'Invalid URL',
    },
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  cropname: {
    type: String,
    required: true,
    index: true,
  },
  location: {
    type: [String],
    required: true,
    index: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Crop', CropSchema);
