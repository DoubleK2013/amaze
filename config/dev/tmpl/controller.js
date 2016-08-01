module.exports = function (name) {
    return `
import * as ${name} from '../service/${name}'
export async function getPrices(ctx, next) {
    ctx.body = await price.getPrices()
    next()
}
`
}