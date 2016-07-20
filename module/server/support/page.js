export default class Page {

    constructor(total = 0,
                per_page = 1,
                current_page = 1,
                last_page = 1,
                form = 1,
                to = 1) {
        this.to = to
        this.total = total
        this.form = form
        this.last_page = last_page
        this.per_page = per_page
        this.current_page = current_page
    }

}

