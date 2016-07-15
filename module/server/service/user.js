import {UserModel, UserSchema} from '../model/user'

export async function addUser(user = {
    name: '',
    email: '',
    homePage: ''
}) {
    let userEntity = new UserModel(user)
    return userEntity.save()
}

export async function getUser(param) {
    return await UserModel.findOne(param).exec()
}

UserSchema.statics.findByName = (name) => {
    return UserModel.findOne({
        name: name
    }).exec()
}