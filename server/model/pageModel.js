import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
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
  },
  documents: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Document"
 }]
});

const Page = mongoose.model('Page', pageSchema);

export default Page;
