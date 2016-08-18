import {FileModel} from '../model/file'
import * as fileHelper from '../support/fileHelper'

export async function save(entry) {
    const files = await fileHelper.fileupload(entry.files)
    return Promise.all(files.map((file) => {
        if(file.code) {
            return Promise.resolve(file)
        }
        return new FileModel(file).save()
    }))
}

export async function remove(id) {
    return FileModel.remove({_id: id}).exec()
}

export async function findById(id) {
    return FileModel.findById(id).exec()
}

export async function find() {
    return FileModel.find().exec()
}