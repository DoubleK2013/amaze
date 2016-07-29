import Router from 'koa-router'

import * as api from '../controller/api'

let router = new Router({
    prefix: '/api'
})

router.get('/prices', api.priceAPI.getPrices)

router.get('/users', api.userAPI.getUsers)
router.post('/user', api.userAPI.addUser)
router.patch('/user', api.userAPI.updateUser)
router.get('/user', api.userAPI.getUser)

router.get('/color', api.getColor)
router.post('/color', api.getColor)

router.get('/menus', api.menuAPI.getMenus)

export default router
