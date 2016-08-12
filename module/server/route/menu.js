import Router from 'koa-router'

import * as menu from '../controller/menu'

let router = new Router()

router.post('/menu', menu.save)
router.patch('/menu', menu.update)
router.del('/menus/:id', menu.remove)
router.get('/menus/:id', menu.findById)
router.get('/menus', menu.find)

export default router