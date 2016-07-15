import * as userService from '../service/user'

export async function addUser(ctx, next) {
    let user = ctx.body
    ctx.body = await userService.addUser(user)
    next()
}

export async function renderIndex(ctx, next) {
    await ctx.render('index', {
        title: 'index'
    })
    next()
}