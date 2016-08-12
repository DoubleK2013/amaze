import Router from 'koa-router'

import * as user from '../controller/user'

let router = new Router()

router.post('/user', user.save)
router.patch('/user', user.update)
router.del('/users/:id', user.remove)
router.get('/users/:id', user.findById)
router.get('/users', user.find)

export default router