export default class functional {
    constructor(value) {
        this.value = value
    }

    static chain(value) {
        if (value instanceof functional) {
            return value
        }
        return new functional(value)
    }

    value() {
        return this.value
    }
}