import mongoose from 'mongoose'
import schema from '../../../data/schema/user'

export const UserSchema = new mongoose.Schema(schema)

export const UserModel = mongoose.model('user', UserSchema)