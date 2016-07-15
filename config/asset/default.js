export default {
    client: {

    },
    server: {
        allJS: ['app.js', 'config/**/*.js', 'module/*/server/**/*.js'],
        views: ['module/*/server/view/**/*.server.view.html'],
        gulpfile: ['gulpfile.babel.js']
    }
}