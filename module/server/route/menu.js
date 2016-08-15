import Router from 'koa-router'

import * as menu from '../controller/menu'

let router = new Router()

router.post('/menus', menu.save)
router.patch('/menus', menu.update)
router.put('/menus/:id', menu.updateById)
router.del('/menus/:id', menu.remove)
router.get('/menus/:id', menu.findById)
router.get('/menus', menu.find)

export default router