import fs from 'fs-promise'
import _ from 'lodash'
import path from 'path'
import yargs from 'yargs'
import program from 'commander'
import chalk from 'chalk'
import pkg from '../package'
import config from '../config/dev/default'
import generator from '../config/dev/generator'
import getGlobbedPaths from '../util/getGlobbedPaths'

// All schemas
const schemas = getGlobbedPaths(config.schema).map((v) => {
    return path.basename(v, path.extname(v))
})

// Usage
program
    .version(pkg.version)
    .usage('-- [option] <schema> [generator]')
    .option('-s, --schema <schema> [generator]', 'generate one or more schema[s] of given')
    .option('-a, --all [generator]', 'generate all schemas')
    .option('-c', 'set controller generator')
    .option('-r', 'set route generator')
    .option('-m', 'set model generator')
    .option('-v', 'set service generator')
    .on('--help', () => {
        console.log('  Examples:')
        console.log('')
        console.log('    $ npm run generator -- -s schema -crmv')
        console.log('    $ npm run generator -- -s "schema1 schema2" -mv')
        console.log('    $ npm run generator -- -a -mv')
        console.log('')
    })
    .parse(process.argv)

console.log(yargs.argv)

/**
 * Help.
 */
if (!process.argv.slice(2).length) {
    program.help()
}

let generators = []
/**
* One at least -crmv
*/
if(yargs.argv.c || yargs.argv.r || yargs.argv.m || yargs.argv.v) {
    if(yargs.argv.c) {
        generators.push('controller')
    }
    if(yargs.argv.r) {
        generators.push('route')
    }
    if(yargs.argv.m) {
        generators.push('model')
    }
    if(yargs.argv.v) {
        generators.push('service')
    }
}
/**
* None at all -crmv
*/
else {
    generators = Object.keys(generator)
}

/**
 * -a Generate all schemas.
 */
if (yargs.argv.a) {
    Promise.all(schemas.map((v) => {
        return generate(v, done, fail)
    })).then(() => 'ALL').then(done, fail)
}
/**
 * -s Generate one or more
 */
else if (_.isString(yargs.argv.s)) {
    // -s 'schema1 schema2'
    if(yargs.argv.s.includes(' ')) {
        Promise.all(yargs.argv.s.split(' ').map((v) => {
            return schemas.includes(v) && generate(v, done, fail)
        })).then(() => yargs.argv.s).then(done, fail)
    }
    // -s schema
    else {
        schemas.includes(yargs.argv.s) && generate(yargs.argv.s, done, fail)
    }
}
/**
* -s schema1 -s schema2 At least twice -s
*/
else if(_.isArray(yargs.argv.s)) {
    Promise.all(yargs.argv.s.map((v) => {
        return schemas.includes(v) && generate(v, done, fail)
    })).then(() => yargs.argv.s.join(' ')).then(done, fail)
}

/* eslint no-console: 0 */
function generate(name, done, fail) {
    console.log('Starting', `${name}:schema`)
    return Promise.all(_.map(generators, (v) => {
        console.log('Starting', `${name}:${v}`)
        return fs.writeFile(path.resolve(__dirname, `../module/server/${v}/${name}.js`), generator[v](name)).then(() => chalk.cyan(`${name}:${v}`)).then(done, fail)
    })).then(() => chalk.yellow(`${name}:schema`)).then(done, fail)
}

function done(rs) {
    console.log(chalk.green('Finished'), rs)
}

function fail(e) {
    console.log(chalk.red('Failure'), e.message)
}
