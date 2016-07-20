import send from 'koa-send'
import { resolve } from 'path'

import * as user from './user'

export let userAPI = user

export async function sendFile(ctx, next) {
    await _send(ctx, 'data.json')
    next()
}

function _send(ctx, path) {
    return send(ctx, path, {
        root: `${resolve('.')}/data`
    })
}

export function api() {
    return [
        sendFile.name,
        [userAPI.addUser.name, userAPI.getUsers.name]
    ]
}