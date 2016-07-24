import * as userService from '../service/user'

export async function addUser(ctx, next) {
    let user = ctx.body
    ctx.body = await userService.addUser(user)
    next()
}

export async function getUser(ctx, next) {
    ctx.body = await userService.getUser()
    next()
}

export async function getUsers(ctx, next) {
    console.log('url', ctx.url)
    const page = Object.assign({}, ctx.query)
    ctx.body = await userService.getUsers(page)
    next()
}