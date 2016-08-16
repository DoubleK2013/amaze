import * as file from '../service/file'
import expand from '../../../util/expand'

export async function save(ctx, next) {
    ctx.body = await file.save({
        files: expand(ctx.request.files.files)
    })
    next()
}

export async function remove(ctx, next) {
    let id = ctx.params.id
    ctx.body = await file.remove(id)
    next()
}

export async function findById(ctx, next) {
    let id = ctx.params.id
    ctx.body = await file.findById(id)
    next()
}

export async function find(ctx, next) {
    ctx.body = await file.find()
    next()
}