import 'shelljs/global'

import config from '../config/dev/default'

import controllerGenerator from '../config/dev/generator/controller'
import modelGenerator from '../config/dev/generator/model'
import routeGenerator from '../config/dev/generator/route'
import serviceGenerator from '../config/dev/generator/service'



let arg = process.argv.slice(2)

console.log(controllerGenerator('price'))
console.log(modelGenerator)
console.log(routeGenerator('user'))
console.log(serviceGenerator)
console.log(config.schema)

console.log('argv', arg)


