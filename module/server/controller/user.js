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
    const param = Object.assign({}, ctx.query)
    ctx.body = await userService.getUsers(param)
    next()
}

export async function updateUser(ctx, next) {
    const user = ctx.body
    ctx.body = await userService.updateUser(user)
    next()
}