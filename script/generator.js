import fs from 'fs'
import path from 'path'

import config from '../config/dev/default'

import controllerGenerator from '../config/dev/generator/controller'
import modelGenerator from '../config/dev/generator/model'
import routeGenerator from '../config/dev/generator/route'
import serviceGenerator from '../config/dev/generator/service'



let arg = process.argv.slice(2)

controllerGenerator('price')

fs.writeFile(path.resolve(__dirname, './conjs.txt.js.js'), controllerGenerator('price'), {mode: 0o666})

modelGenerator('user')
routeGenerator('user')
serviceGenerator('user')
config.schema

console.log('argv', arg)


