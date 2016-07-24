import price from '../service/price'
export async function getPrices(ctx, next) {
    console.log(price)
    ctx.body = []
    next()
}