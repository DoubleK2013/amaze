export default function (name) {
    return `

import Router from 'koa-router'

import * as ${name} from '../controller/${name}'

let router = new Router()

router.post('/${name}', ${name}.save)
router.patch('/${name}', ${name}.update)
router.del('/${name}s/:id', ${name}.remove)
router.get('/${name}s/:id', ${name}.findOne)
router.get('/${name}s', ${name}.find)

export default router

`.trim()
}
