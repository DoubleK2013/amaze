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
            resolve({
                name: file.name,
                path: path.resolve(config.upload, file.name),
                size: file.size,
                type: file.type,
                url: `/${config.url}/${file.name}`,
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
