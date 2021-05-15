import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  pages: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page"
 }]
});

const User = mongoose.model('User', userSchema);

export default User;
