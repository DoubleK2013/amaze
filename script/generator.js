import fs from 'fs-promise'
import _ from 'lodash'
import path from 'path'
import yargs from 'yargs'
import program from 'commander'
import pkg from '../package'
import config from '../config/dev/default'
import generator from '../config/dev/generator'
import getGlobbedPaths from '../util/getGlobbedPaths'

const schemas = getGlobbedPaths(config.schema).map((v) => {
    return path.basename(v, path.extname(v))
})


program
    .version(pkg.version)
    .usage('-- [option] <schema ...>')
    .option('-s, --schema', 'schema name')
    .option('-a, --all', 'generate all schema from data/schema')
    .parse(process.argv)

if (!process.argv.slice(2).length) {
    program.help()
    process.exit(0)
}

if (yargs.argv.a) {
    Promise.all(schemas.map((v) => {
        return generate(v, done, fail)
    })).then(() => 'ALL').then(done, fail)
}
else if (schemas.includes(yargs.argv.s)) {
    generate(yargs.argv.s, done, fail)
}

// TODO support select some generator on command line
function generate(name, done, fail) {
    return Promise.all(_.map(Object.keys(generator), (v) => {
        return fs.writeFile(path.resolve(__dirname, `../module/server/${v}/${name}.js`), generator[v](name)).then(() => v).then(done, fail)
    })).then(() => name).then(done, fail)
}

function done(rs) {
    console.log('done', rs)
}

function fail(e) {
    console.log('fail', e.message)
}
