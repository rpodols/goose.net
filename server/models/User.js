const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
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
    ageVerified: {
        type: Boolean,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
        
    },
    setlists: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Setlist'
        }
    ],
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

    // isAdmin: {
    //     type: Boolean,
    //     required: true,
    // }
});

    userSchema.pre('save', async function(next) {
        if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        }
    
        next();
    });

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;