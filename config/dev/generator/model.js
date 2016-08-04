import {pascal} from 'change-case'
export default function (name, schema) {
    return `

import mongoose from 'mongoose'

export const ${pascal([name, 'schema'])} = new mongoose.Schema(${JSON.stringify(schema)})

export const ${pascal([name, 'model'])} = mongoose.model('${name}', ${pascal([name, 'schema'])})

`.trim()
}