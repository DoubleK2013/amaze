import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

import _ from 'lodash'

import defaultAssets from './config/asset/default'

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
        defaultAssets.client.js,
        defaultAssets.server.allJS,
        defaultAssets.server.gulpfile
    )
    gulp.watch(es, gulp.series(lintJs))
}

gulp.task('lint', lintJs)

gulp.task('default',
    gulp.series(
        lintJs,
        gulp.parallel(serverRun, watch)
    )
)