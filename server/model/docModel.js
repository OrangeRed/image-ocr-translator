import mongoose from 'mongoose';

const docSchema = new mongoose.Schema({
  fileType: {
    type: String,
    required: true,
    min: 2,
    max: 10
  },
  fileUrl: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',
    required: true
  }
});

const Doc = mongoose.model('Document', docSchema);

export default Doc;
