export default function (name) {
    return `

import Router from 'koa-router'

import * as ${name} from '../controller/${name}'

let router = new Router()

router.post('/${name}s', ${name}.save)
router.patch('/${name}s', ${name}.update)
router.put('/${name}s/:id', ${name}.updateById)
router.del('/${name}s/:id', ${name}.remove)
router.get('/${name}s/:id', ${name}.findById)
router.get('/${name}s', ${name}.find)

export default router

`.trim()
}
