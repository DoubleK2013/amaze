import Router from 'koa-router'

let router = new Router()

router.get('/404', async (ctx) => {
    await ctx.render('404')
})

router.get('/500', async (ctx) => {
    await ctx.render('500')
})

export default router