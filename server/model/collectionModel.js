import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  translationLang: {
    type: String,
    required: true,
    min: 2,
    max: 20
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;
