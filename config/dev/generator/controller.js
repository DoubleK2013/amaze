export default function (name) {
    return `

import * as ${name} from '../service/${name}'

export async function save(ctx, next) {
    let entry = ctx.body
    ctx.body = await ${name}.save(entry)
    next()
}

export async function remove(ctx, next) {
    let id = ctx.params.id
    ctx.body = await ${name}.remove(id)
    next()
}

export async function update(ctx, next) {
    let entry = ctx.body
    ctx.body = await ${name}.update(entry)
    next()
}

export async function findOne(ctx, next) {
    let id = ctx.params.id
    ctx.body = await ${name}.findOne(id)
    next()
}

export async function find(ctx, next) {
    let filter = ctx.query
    ctx.body = await ${name}.find(filter)
    next()
}

`.trim()
}
