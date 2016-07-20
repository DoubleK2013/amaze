import Router from 'koa-router'

import * as api from '../controller/api'

let router = new Router({
    prefix: '/api'
})

router.get('/getUsers', api.userAPI.getUsers)
router.get('/color', api.getColor)
router.post('/color', api.getColor)


export default router
