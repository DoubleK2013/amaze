import Router from 'koa-router'

import * as menu from '../controller/menu'

let router = new Router()

router.post('/menu', menu.save)
router.patch('/menu', menu.update)
router.del('/menu/:id', menu.remove)
router.get('/menu/:id', menu.findOne)
router.get('/menus', menu.find)

export default router