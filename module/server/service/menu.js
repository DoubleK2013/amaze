import {MenuModel} from '../model/menu'

export async function save(entry) {
    let _entry = new MenuModel(entry)
    return _entry.save()
}

export async function remove(id) {
    return MenuModel.remove({_id: id}).exec()
}

export async function update(entry) {
    return MenuModel.update({_id: entry._id}, entry).exec()
}

export async function findById(id) {
    return MenuModel.findById(id).exec()
}

export async function find() {
    return MenuModel.find().exec()
}