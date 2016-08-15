export async function renderIndex(ctx, next) {
    await ctx.render('index', {
        title: 'AMAZE API'
    })
    next()
}