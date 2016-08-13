import mongoose from 'mongoose'

import cfg from '../asset/db'
import log from './logger'

export default class Mongoose {
    static configure() {
        // reset mongoose default promise(mpromise) to native promise
        mongoose.Promise = Promise
    }
    static connect() {
        let connection
        try {
            connection = mongoose.connect(cfg.uri, cfg.option)
        } catch (err) {
            log.db(err)
            connection = Promise.reject(new Error(err))
        }
        return connection
    }
    static disconnect(cb) {
        return mongoose.disconnect().then(() => {
            log.db(new Date().toLocaleTimeString(), 'Database had disconnected')
        }, (err) => {
            log.db(err)
            cb(err)
        })
    }
}

Mongoose.configure()
