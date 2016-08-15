import {UserModel} from '../model/user'
import Page from '../support/page'

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

    const page = new Page(query)
    page.total = await UserModel.count()

    const users = await UserModel
        .find()
        .skip(page.from)
        .limit(page.per_page)
        .exec()

    const {
        current_page,
        per_page,
        from,
        to,
        total,
        last_page
    } = page

    return {
        current_page,
        per_page,
        from: from + 1,
        to,
        total,
        last_page,
        data: users
    }

}
