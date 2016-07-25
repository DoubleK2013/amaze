import Page from './page'
export default class PageExtra extends Page {
    constructor({
        data = []
    } = {}) {
        super(arguments[0])
        this.data = data
    }
}