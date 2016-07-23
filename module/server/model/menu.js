import mongoose from 'mongoose'

export const MenuSchema = new mongoose.Schema({
    title: String,
    url: String,
    sub: Array
})

export const MenuModel = mongoose.model('menu', MenuSchema)
