import { PriceModel } from '../model/price'
import PageExtra from '../support/pageExtra'


export async function getPrices(param) {
    let pagination = new PageExtra(param)

    let prices = await PriceModel.find({}).exec()

    pagination.total = prices.length

    //pagination.data = prices.slice(pagination.form, pagination.to)
    pagination.data = prices.slice(0, 2)

    let { from, to, last_page} = pagination

    return Object.assign({
        form: from + 1,
        to,
        last_page
    }, pagination)
}