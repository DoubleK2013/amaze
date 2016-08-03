import { camelCase } from 'change-case'

export default function (name) {
    return getTmpl(name)
}

function getTmpl (name) {
    return `

import Router from 'koa-router'

import * as ${name} from '../controller/${name}'

let router = new Router({
    prefix: '/${name}'
})

router.post('/${name}', ${name}.${camelCase(['add', name])})
router.patch('/${name}', ${name}.${camelCase(['update', name])})
router.delete('/${name}/:id', ${camelCase(['remove', name])})
router.get('/${name}/:id', ${name}.${camelCase(['get', name])})
router.get('/${name}s', ${name}.${camelCase(['get', name])}s)


export default router


`.trim()

}
