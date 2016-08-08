import mongoose from 'mongoose'
import schema from '../../../data/schema/menu'

export const MenuSchema = new mongoose.Schema(schema)

export const MenuModel = mongoose.model('menu', MenuSchema)