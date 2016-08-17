import config from '../../../config/asset/file'
import fs from 'fs-promise'
import path from 'path'
import os from 'os'
export async function fileupload(files) {
    return Promise.all(files.map((file) => {
        return saveFile(file)
    }))
}

async function saveFile(file) {
    if (file.size > config.maxFileSize) {
        console.log(file.size)
    }
    await fs.rename(file.path, path.resolve(config.baseDir, file.name))
    return {
        name: file.name,
        path: path.resolve(config.baseDir, file.name),
        size: file.size,
        type: file.type,
        last_modify_at: file.lastModifiedDate
    }
}
