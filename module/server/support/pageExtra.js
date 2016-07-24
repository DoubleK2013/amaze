import Page from './page'
export default class PageExtra extends Page {
    constructor({
        prev_page_url = '',
        next_page_url = '',
        data = []
    } = {}) {
        super()
        this.data = data
        this.prev_page_url = prev_page_url
        this.next_page_url = next_page_url
    }
}