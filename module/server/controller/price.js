import price from '../service/price'
export async function getPrices(ctx, next) {
    ctx.body = await price.getPrices()
    next()
}