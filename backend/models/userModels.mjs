import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
    required: true 
  },
  dob: 
  { 
    type: Date, 
    required: true 
  },
  contact: 
  { type: String, 
    required: true
   },
  email: 
  { type: String, 
    required: true, 
    unique: true 
  },
  description: {
     type: String, 
     required: true 
    }
});

const User = mongoose.model('User', userSchema);

export default User;
