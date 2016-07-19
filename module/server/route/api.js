import Router from 'koa-router'

import * as controller from '../controller/api'

let router = new Router({
    prefix: '/api'
})

router.get('/getUsers', controller.getUsers)


export default router
