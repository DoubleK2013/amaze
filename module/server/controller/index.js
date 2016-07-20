import * as api from './api'

export async function renderIndex(ctx, next) {
    await ctx.render('index', {
        title: 'AMAZE API',
        api: api.api()
    })
    next()
}