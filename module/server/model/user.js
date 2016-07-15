import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    homePage: String
})

export const UserModel = mongoose.model('user', UserSchema)
