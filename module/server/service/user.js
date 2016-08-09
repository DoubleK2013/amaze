import {UserModel} from '../model/user'
import PageExtra from '../support/pageExtra'

export async function save(entry = {
    name: '',
    nickname: '',
    email: '',
    birthdate: `${new Date().toLocaleDateString()}`,
    gender: '',
    group_id: '0',
    created_at: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    update_at: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
}) {
    let _entry = new UserModel(entry)
    return _entry.save()
}

export async function remove(id) {
    return UserModel.remove({_id: id}).exec()
}

export async function update(entry) {
    return UserModel.update({_id: entry.id}, entry).exec()
}

export async function findOne(id) {
    return UserModel.findOne({_id: id}).exec()
}

export async function find(filter) {

    let pagination = new PageExtra(filter)

    let users = await UserModel
        .find({})
        .exec()

    pagination.total = users.length
    pagination.data = users.slice(pagination.from, pagination.to)

    let {from, to, last_page} = pagination

    return Object.assign({
        from: from + 1,
        to,
        last_page
    }, pagination)

}