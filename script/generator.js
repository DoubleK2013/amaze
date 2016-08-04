import fs from 'fs'
import path from 'path'

import pkg from '../package'

import controllerGenerator from '../config/dev/generator/controller'
import modelGenerator from '../config/dev/generator/model'
import routeGenerator from '../config/dev/generator/route'
import serviceGenerator from '../config/dev/generator/service'

import yargs from 'yargs'
import program from 'commander'
import ora from 'ora'

console.log(pkg.version)

program
    .version('0.0.1')
    .usage('[option] <schema ...>')
    .option('-s, --schema', 'schema name')
    .option('-a, --all', 'generate all schema from data/schema')
    .parse(process.argv)

const spinner = ora('creating')

if(!process.argv.slice(2).length) {
    program.help()
    process.exit(0)
}

if(program.schema) {
    console.log(program.schema)
}

spinner.start()

if(yargs.argv.a) {
    generateAll(yargs.argv.s)
    spinner.succeed('done')
    process.exit(0)
}

try {
    fs.statSync(path.resolve(__dirname, '../data/schema', `${yargs.argv.s}.json`))
    generateAll(yargs.argv.s)
} catch (e) {
    spinner.fail()
    console.log(e.message)
    process.exit(1)
}


spinner.succeed('done')
function generateAll (schema) {
    fs.writeFile(path.resolve(__dirname, `../module/server/controller/${schema}.js`), controllerGenerator(schema))
    fs.writeFile(path.resolve(__dirname, `../module/server/route/${schema}.js`), routeGenerator(schema))
    fs.writeFile(path.resolve(__dirname, `../module/server/service/${schema}.js`), serviceGenerator(schema))
    fs.writeFile(path.resolve(__dirname, `../module/server/model/${schema}.js`), modelGenerator(schema, {}))
}