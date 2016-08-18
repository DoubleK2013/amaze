import path from 'path'
import fs from 'fs-promise'
import config from '../../../config/asset/file'
import log from '../../../config/lib/logger'

export async function fileupload(files) {
    return Promise.all(files.map((file) => {
        return saveFile(file)
    }))
}

async function saveFile(file) {
    if(!config.accept.includes(file.type)) {
        return Promise.reject(new Error('Unacceptable types')).catch((err) => {
            log.error(err)
            return {
                code: config.errorCode.UNACCEPTABLE_TYPE
            }
        })
    }
    if (file.size > config.maxFileSize) {
        return Promise.reject(new Error('Exceeds the maximum size')).catch((err) => {
            log.error(err)
            return {
                code: config.errorCode.EXCEEDS_THE_MAXIMUM_SIZE
            }
        })
    }
    return new Promise(function (resolve, reject) {
        fs.rename(file.path, path.resolve(config.upload, file.name), function (err) {
            if (err) reject(new Error(err))
            fs.unlink(file.path)
            resolve({
                name: file.name,
                type: file.type,
                size: file.size,
                path: path.resolve(config.upload, file.name),
                url: path.join('/', config.url, file.name),
                create_at: new Date(),
                last_modify_at: file.lastModifiedDate
            })
        })
    }).catch(function(err) {
        log.error(err)
        return {
            code: config.errorCode.SERVER_ERROR
        }
    })
}
