import Router from 'koa-router'

export default class BaseRouter extends Router {
    constructor () {
        super()
        console.log('this', this)
    }
    register() {
        console.log('router', this.routes())
    }
}
