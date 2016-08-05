import fs from 'fs-promise'
import path from 'path'

import yargs from 'yargs'
import program from 'commander'
import ora from 'ora'

import pkg from '../package'
import config from '../config/dev/default'

import controllerGenerator from '../config/dev/generator/controller'
import modelGenerator from '../config/dev/generator/model'
import routeGenerator from '../config/dev/generator/route'
import serviceGenerator from '../config/dev/generator/service'

import getGlobbedPaths from '../util/getGlobbedPaths'

const schemas = getGlobbedPaths(config.schema).map(function(v) {
    return path.basename(v, path.extname(v))
})

program
    .version(pkg.version)
    .usage('[option] <schema ...>')
    .option('-s, --schema', 'schema name')
    .option('-a, --all', 'generate all schema from data/schema')
    .parse(process.argv)

if (!process.argv.slice(2).length) {
    program.help()
    process.exit(0)
}

const spinner = ora('creating')

spinner.start()

if (yargs.argv.a) {
    generateAll(yargs.argv.s, spinner.stop, spinner.fail)
}

if(schemas.includes(yargs.argv.s)) {
    generateAll(yargs.argv.s, spinner.stop, spinner.fail)
}
spinner.stop()
function generateAll(name, done, fail) {
    Promise.all([
        fs.writeFile(path.resolve(__dirname, `../module/server/controller/${name}.js`), controllerGenerator(name)),
        fs.writeFile(path.resolve(__dirname, `../module/server/route/${name}.js`), routeGenerator(name)),
        fs.writeFile(path.resolve(__dirname, `../module/server/service/${name}.js`), serviceGenerator(name)),
        fs.writeFile(path.resolve(__dirname, `../module/server/model/${name}.js`), modelGenerator(name))
    ]).then(done, fail)
}