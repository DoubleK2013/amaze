import Router from 'koa-router'

import * as api from '../controller/api'

let router = new Router({
    prefix: '/api'
})

router.get('/getUsers', api.userAPI.getUsers)


export default router
