import * as userService from '../service/user'

import * as api from './api'

export async function addUser(ctx, next) {
    let user = ctx.body
    ctx.body = await userService.addUser(user)
    next()
}

export async function renderIndex(ctx, next) {
    console.log(api, 'api')
    await ctx.render('index', {
        title: 'AMAZE API',
        api: Object.keys(api)
    })
    next()
}