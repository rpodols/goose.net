const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    moderator: {
        type: Boolean,
        required: true,
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 69;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
}
});

module.exports = User;