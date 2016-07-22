import Router from 'koa-router'

import * as api from '../controller/api'

let router = new Router({
    prefix: '/api'
})

router.get('/users', api.userAPI.getUsers)
router.post('/user', api.userAPI.addUser)
router.get('/user', api.userAPI.getUser)
router.get('/color', api.getColor)
router.post('/color', api.getColor)


export default router
