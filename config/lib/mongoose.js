import mongoose from 'mongoose'

import cfg from '../asset/db'
import log from './logger'

export default class Mongoose {
    static configure() {
        // reset mongoose default promise(mpromise) to native promise
        mongoose.Promise = Promise
    }
    static connect() {
        let connectPromise
        try {
            connectPromise = mongoose.connect(cfg.uri, cfg.option)
        } catch (err) {
            log.db(err)
            connectPromise = Promise.reject(new Error(err))
        }
        return connectPromise
    }
    static disconnect(cb) {
        mongoose.disconnect((err) => {
            /* eslint no-console: 0 */
            log.db(new Date().toLocaleTimeString(), 'database disconnect')
            if(err) {
                log.db(err)
                cb(err)
            }
        })
    }
}

Mongoose.configure()
