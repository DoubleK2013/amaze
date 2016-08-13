import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

import _ from 'lodash'

import defaultAssets from './config/asset/default'
import testAssets from './config/asset/test'

const plugins = gulpLoadPlugins()


function lintJs() {
    const all = _.union(
        defaultAssets.client.Js,
        defaultAssets.server.allJS,
        defaultAssets.server.gulpfile
    )

    return gulp.src(all)
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
}

function test() {
    return gulp.src(testAssets.service, {read: false})
        .pipe(plugins.mocha({
            reporter: 'spec',
            timeout: 5000
        }))
}

function serverRun() {
    return plugins.nodemon({
        script: 'app.js',
        watch: _.union(
            defaultAssets.server.views,
            defaultAssets.server.allJS,
            defaultAssets.server.gulpfile
        )
    })
}

function watch() {
    const es = _.union(
        defaultAssets.client.Js,
        defaultAssets.server.allJS,
        defaultAssets.server.gulpfile
    )
    gulp.watch(es, gulp.series(lintJs))
}

gulp.task('lint', lintJs)

gulp.task('test', test)

gulp.task('default',
    gulp.series(
        lintJs,
        gulp.parallel(serverRun, watch)
    )
)
