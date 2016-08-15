import Router from 'koa-router'

import * as controller from '../controller/index'

let router = new Router()

router.get('/', controller.renderIndex)


export default router
