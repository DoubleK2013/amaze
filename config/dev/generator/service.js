import {pascal} from 'change-case'

export default function (name) {
    return `

import {${pascal([name, 'model'])}} from '../model/${name}'

export async function save(entry) {
    let _entry = new ${pascal([name, 'model'])}(entry)
    return _entry.save()
}

export async function remove(id) {
    return ${pascal([name, 'model'])}.remove({_id: id}).exec()
}

export async function update(entry) {
    return ${pascal([name, 'model'])}.update({_id: entry.id}, entry).exec()
}

export async function findById(id) {
    return ${pascal([name, 'model'])}.findById(id).exec()
}

export async function find() {
    return ${pascal([name, 'model'])}.find().exec()
}

`.trim()
}
