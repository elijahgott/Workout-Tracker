const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    uid: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model.User || mongoose.model('User', UserSchema);