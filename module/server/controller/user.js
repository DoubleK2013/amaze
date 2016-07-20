import * as userService from '../service/user'

export async function addUser(ctx, next) {
    let user = ctx.body
    ctx.body = await userService.addUser(user)
    next()
}

export async function getUsers(ctx, next) {
    const page = Object.assign({
        total: 0,
        per_page: 2,
        current_page: 1,
        last_page: 1,
        form: 1,
        to: 1
    }, ctx.query)
    ctx.body = await userService.getUsers(page)
    next()
}