import send from 'koa-send'
import { resolve } from 'path'

export async function getUsers(ctx, next) {
    await _send(ctx, 'users.json')
    next()
}

function _send(ctx, path) {
    return send(ctx, path, {
        root: `${resolve('.')}/data`
    })
}
