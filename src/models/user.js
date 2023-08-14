import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
}, {
  toJSON: {
    transform: (document, returnValue) => {
      const { _id, __v, ...data } = returnValue;
      return {
        id: document.get('id'),
        ...data
      };
    }
  }
});

export default mongoose.model('user', userSchema);
