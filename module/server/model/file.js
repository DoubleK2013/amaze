import mongoose from 'mongoose'
import schema from '../../../data/schema/file'

export const FileSchema = new mongoose.Schema(schema)

export const FileModel = mongoose.model('file', FileSchema)