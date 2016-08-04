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
    return ${pascal([name, 'model'])}.update(entry).exec()
}

export async function findOne(id) {
    return ${pascal([name, 'model'])}.findOne({_id: id}).exec()
}

export async function find(filter) {
    return ${pascal([name, 'model'])}.find(filter).exec()
}

`.trim()
}