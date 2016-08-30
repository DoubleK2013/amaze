import path from 'path'
import fs from 'fs-promise'
import config from '../../../config/asset/file'
import log from '../../../config/lib/logger'
import flattened from '../../../util/flattened'

export async function fileupload(files) {
    if(!files.length) {
        return Promise.resolve([{
            code: config.errorCode.NOT_FILE_UPLOAD
        }])
    }
    return Promise.all(files.map((file) => {
        return saveFile(file)
    }))
}

export async function clearTmpFiles() {
    return Promise.all(flattened(config.tmp).map((file) => {
        return removeTmpFile(file)
    }))
}

async function saveFile(file, {
        maxSize = config.maxFileSize,
        accept = config.accept
    } = {}) {
    if(!accept.includes(file.type)) {
        return Promise.reject(new Error('Unacceptable types')).catch((err) => {
            removeTmpFile(file.path)
            log.error(err)
            return {
                code: config.errorCode.UNACCEPTABLE_TYPE
            }
        })
    }
    if (file.size > maxSize) {
        return Promise.reject(new Error('Exceeds the maximum size')).catch((err) => {
            log.error(err)
            removeTmpFile(file.path)
            return {
                code: config.errorCode.EXCEEDS_THE_MAXIMUM_SIZE
            }
        })
    }
    return new Promise(function (resolve, reject) {
        fs.rename(file.path, path.resolve(config.upload, file.name), function (err) {
            if (err) reject(new Error(err))
            removeTmpFile(file.path)
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

async function removeTmpFile (file) {
    return new Promise(function (resolve, reject) {
        fs.unlink(file, function(err) {
            if(err) reject(new Error(err))
            resolve()
        })
    })
}
