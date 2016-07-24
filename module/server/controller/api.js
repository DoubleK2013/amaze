import send from 'koa-send'
import { resolve } from 'path'

import * as user from './user'
import * as menu from './menu'
import * as price from './price'

export let userAPI = user
export let menuAPI = menu
export let priceAPI = price

export async function sendFile(ctx, next) {
    await _send(ctx, 'data.json')
    next()
}

export function getColor(ctx, next) {
    ctx.body = {
        color: '#558811'
    }
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