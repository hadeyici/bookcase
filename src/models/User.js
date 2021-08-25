import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

/**
 * @class User
 */

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, '`name` is required'],
    validate: (value) => validator.toString(value),
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
