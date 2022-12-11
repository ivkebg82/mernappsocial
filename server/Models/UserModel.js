import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
    },

    followers: [],
    following: [],
    profileImg: String,
    coverImg: String,
    worksAt: String,
    status: String,
})


const UserModel = mongoose.model('User', UserSchema)

export default UserModel;