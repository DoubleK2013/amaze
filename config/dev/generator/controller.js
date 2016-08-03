import { camelCase } from 'change-case'

export default function (name) {
    return getTmpl(name)
}

function getTmpl (name) {
    return `

import * as ${name} from '../service/${name}'

export async function ${camelCase(['add', name])}(ctx, next) {
    let ${name}Entry = ctx.body
    ctx.body = await ${name}.${camelCase(['add', name])}(${name}Entry)
    next()
}

export async function ${camelCase(['remove', name])}(ctx, next) {
    let param = ctx.body
    ctx.body = await ${name}.${camelCase(['remove', name])}(param)
    next()
}

export async function ${camelCase(['update', name])}(ctx, next) {
    let param = ctx.body
    ctx.body = await ${name}.${camelCase(['update', name])}(param)
    next()
}

export async function ${camelCase(['get', name])}(ctx, next) {
    ctx.body = await ${name}.${camelCase(['get', name])}()
    next()
}

export async function ${camelCase(['get', name])}s(ctx, next) {
    ctx.body = await ${name}.${camelCase(['get', name])}s()
    next()
}

`.trim()

}
