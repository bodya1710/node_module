const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    age: {
        type: Number,
        default: 20,
    },
    password: {
        type: String,
        required: true,
    },
},{timestamps: true});

module.exports = model('user', UserSchema);