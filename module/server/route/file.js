import Router from 'koa-router'

import * as file from '../controller/file'

let router = new Router()

router.post('/files', file.save)
router.del('/files/:id', file.remove)
router.get('/files/:id', file.findById)
router.get('/files', file.find)

export default router