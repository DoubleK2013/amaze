import * as menu from '../service/menu'

export async function save(ctx, next) {
    let entry = ctx.body
    ctx.body = await menu.save(entry)
    next()
}

export async function remove(ctx, next) {
    let id = ctx.params.id
    ctx.body = await menu.remove(id)
    next()
}

export async function update(ctx, next) {
    let entry = ctx.body
    ctx.body = await menu.update(entry)
    next()
}

export async function updateById(ctx, next) {
    let entry = ctx.body
    entry._id = ctx.params.id
    ctx.body = await menu.update(entry)
    next()
}

export async function findById(ctx, next) {
    let id = ctx.params.id
    ctx.body = await menu.findById(id)
    next()
}

export async function find(ctx, next) {
    ctx.body = await menu.find()
    next()
}