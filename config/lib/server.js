import envCfg from '../env/default'
import app from './koa'

function start() {
    app.listen(envCfg.port, () => {
        /* eslint no-console: 0 */
        console.info(`
            --
            listening on port: ${envCfg.port}
            --
        `)
    })
}


export default {
    start
}