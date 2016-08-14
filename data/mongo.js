/*eslint quotes: 0 */
db.getCollection('menus').find({})

db.getCollection('menus').insert({
    "title" : "用户列表",
    "url" : "/users",
    "sub" : [
        {
            "title" : "新增用户",
            "url" : "/form"
        }
    ]
})

db.getCollection('menus').update({
    "title": "用户列表"
}, {
    $set: {
        "title": "查看列表"
    }
})

db.getCollection('menus').findOne()

db.getCollection('users').find({})
