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

    let {per_page, current_page} = query

    let pagination = new PageExtra({
        per_page,
        current_page
    })

    pagination.total = await UserModel.count(query)

    let {from, to, last_page} = pagination

    let users = await UserModel
        .find(query)
        .skip(from)
        .limit(per_page)
        .exec()

    pagination.data = users

    return Object.assign({
        from: from + 1,
        to,
        last_page
    }, pagination)

}
