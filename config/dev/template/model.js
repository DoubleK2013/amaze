import {pascal} from 'change-case'
export default function (name) {
    return `

import mongoose from 'mongoose'
import schema from '../../../data/schema/${name}'

export const ${pascal([name, 'schema'])} = new mongoose.Schema(schema)

export const ${pascal([name, 'model'])} = mongoose.model('${name}', ${pascal([name, 'schema'])})

`.trim()
}