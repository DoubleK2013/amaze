import path from 'path'
import fs from 'fs-promise'
import config from '../../../config/asset/file'
import log from '../../../config/lib/logger'

export async function fileupload(files) {
    if (!files.length) {
        return Promise.resolve([{
            code: config.errorCode.NOT_FILE_UPLOAD
        }])
    }
    return Promise.all(files.map((file) => saveFile(file)))
}

export async function clearTmpFiles() {
    return removeFile(config.tmp)
}

async function saveFile(file, {
    maxSize = config.maxFileSize,
    accept = config.accept
    } = {}) {
    if (!accept.includes(file.type)) {
        return Promise.reject(new Error('Unacceptable types')).catch((err) => {
            log.error(err)
            removeFile(file.path)
            return {
                code: config.errorCode.UNACCEPTABLE_TYPE
            }
        })
    }
    if (file.size > maxSize) {
        return Promise.reject(new Error('Exceeds the maximum size')).catch((err) => {
            log.error(err)
            removeFile(file.path)
            return {
                code: config.errorCode.EXCEEDS_THE_MAXIMUM_SIZE
            }
        })
    }
    return fs.rename(file.path, path.resolve(config.upload, file.name)).then(() => {
        removeFile(file.path)
        return {
            name: file.name,
            type: file.type,
            size: file.size,
            path: path.resolve(config.upload, file.name),
            url: path.join('/', config.url, file.name),
            create_at: new Date(),
            last_modify_at: file.lastModifiedDate
        }
    }).catch(function (err) {
        log.error(err)
        return {
            code: config.errorCode.SERVER_ERROR
        }
    })
}

async function removeFile(file) {
    return fs.stat(file).then((stat) => {
        if (stat.isDirectory()) {
            return fs.readdir(file).then((files) => Promise.all(files.map((value) => removeFile(path.resolve(file, value)))))
        }
        else if (stat.isFile()) {
            return fs.unlink(file)
        }
        return Promise.reject(new Error('unknown file type'))
    }).catch((err) => log.error(err))
}
