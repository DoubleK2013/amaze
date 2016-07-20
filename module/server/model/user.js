import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: String,
    nickname: String,
    email: String,
    birthdate: String,
    gender: String,
    group_id: String,
    created_at: String,
    update_at: String
})

export const UserModel = mongoose.model('user', UserSchema)
