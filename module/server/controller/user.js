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

export async function updateById(ctx, next) {
    let entry = ctx.body
    entry._id = ctx.params.id
    ctx.body = await user.update(entry)
    next()
}

export async function findById(ctx, next) {
    let id = ctx.params.id
    ctx.body = await user.findById(id)
    next()
}

export async function find(ctx, next) {
    ctx.body = await user.find()
    next()
}