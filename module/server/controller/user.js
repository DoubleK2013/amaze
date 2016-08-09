import * as user from '../service/user'

export async function save(ctx, next) {
    let entry = ctx.body
    ctx.body = await user.save(entry)
    next()
}

export async function remove(ctx, next) {
    let id = ctx.params.id
    ctx.body = await user.remove(id)
    next()
}

export async function update(ctx, next) {
    let entry = ctx.body
    ctx.body = await user.update(entry)
    next()
}

export async function findOne(ctx, next) {
    let id = ctx.params.id
    ctx.body = await user.findOne(id)
    next()
}

export async function find(ctx, next) {
    let filter = ctx.query
    ctx.body = await user.find(filter)
    next()
}