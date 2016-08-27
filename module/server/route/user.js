import Router from 'koa-router'

import * as user from '../controller/user'

let router = new Router()

router.get('/users/page', user.findPageable)

router.post('/users', user.save)
router.patch('/users', user.update)
router.put('/users/:id', user.updateById)
router.del('/users/:id', user.remove)
router.get('/users/:id', user.findById)
router.get('/users', user.find)

export default router