import config from '../../../config/asset/file'

export async function fileupload(files) {
    return Promise.all(files.map((file) => {
        return saveFile(file)
    }))
}

async function saveFile(file) {
    if (file.size > config.maxFileSize) {
        console.log(file.size)
    }
    return {
        name: file.name,
        path: file.path,
        size: file.size
    }
}
