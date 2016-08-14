import {UserModel} from '../model/user'
import PageExtra from '../support/pageExtra'

export async function save(entry) {
    let _entry = new UserModel(entry)
    return _entry.save()
}

export async function remove(id) {
    return UserModel.remove({_id: id}).exec()
}

export async function update(entry) {
    return UserModel.update({_id: entry.id}, entry).exec()
}

export async function findById(id) {
    return UserModel.findById(id).exec()
}

export async function find() {
    return UserModel.find().exec()
}

export async function findPageable(query) {

    const pagination = new PageExtra(query)
    pagination.total = await UserModel.count()

    const users = await UserModel
        .find()
        .skip(pagination.from)
        .limit(pagination.per_page)
        .exec()

    pagination.data = users

    const {
        current_page,
        per_page,
        from,
        to,
        last_page,
        data
        } = pagination

    return {
        current_page,
        per_page,
        form: from + 1,
        to,
        last_page,
        data
    }

}
