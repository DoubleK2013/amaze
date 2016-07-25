import {UserModel, UserSchema} from '../model/user'
import PageExtra from '../support/pageExtra'
export async function addUser(user = {
    name: '',
    nickname: '',
    email: '',
    birthdate: `${new Date().toLocaleDateString()}`,
    gender: '',
    group_id: '0',
    created_at: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    update_at: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
}) {
    let userEntity = new UserModel(user)
    return userEntity.save()
}

export async function getUser(param) {
    return await UserModel.findOne(param).exec()
}

export async function getUsers(param) {

    let pagination = new PageExtra(param)

    let users = await UserModel
        .find({})
        .exec()

    pagination.total = users.length
    pagination.data = users.slice(pagination.from, pagination.to)

    let { from, to, last_page} = pagination

    return Object.assign({
        from: from + 1,
        to,
        last_page
    }, pagination)
}

UserSchema.statics.findByName = (name) => {
    return UserModel.findOne({
        name: name
    }).exec()
}
