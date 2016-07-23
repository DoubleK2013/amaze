import { MenuModel } from '../model/menu'

export async function getMenus() {
    return MenuModel.find({}).exec()
}

export async function addMenu() {
    let menu = new MenuModel({
        title: '商品列表',
        url: '/table'
    })
    return menu.save()
}
