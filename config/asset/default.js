export default {
    client: {
        Js: ['module/client/**/*.js']
    },
    server: {
        allJS: ['app.js', 'config/**/*.js', 'module/server/**/*.js', 'util/**/*.js', 'data/**/*.js', 'script/**/*.js'],
        views: ['module/server/view/**/*.server.view.html'],
        gulpfile: ['gulpfile.babel.js']
    }
}