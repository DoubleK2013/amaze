import toNumber from '../../../util/toNumber'
export default class Page {
    get from() {
        return this.per_page * (this.current_page - 1)
    }
    get to() {
        return this.current_page * this.per_page
    }
    get last_page() {
        return Math.ceil(this.total / this.per_page)
    }
    constructor({
        total = 0,
        per_page = 10,
        current_page = 1
    } = {}) {
        this.total = total
        this.per_page = toNumber(per_page, 10)
        this.current_page = toNumber(current_page, 1)
    }
}
