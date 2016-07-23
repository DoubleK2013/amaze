import * as menu from '../service/menu'

export async function getMenus(ctx, next) {
    ctx.body = await menu.getMenus()
    next()
}