import {expect} from 'chai'
import Mongoose from '../../../../config/lib/mongoose'

import * as user from '../../../../module/server/service/user'

describe('user service', function () {

    before(function() {
        return Mongoose.connect().then(function () {
            console.log(`
            -- mongodb had connected --
            `)
        })
    })

    after(function () {
        return Mongoose.disconnect().then(function () {
            console.log(`
            -- mongodb had disconnected --
            `)
        })
    })

    it('findPageable', function() {
        return user.findPageable({
            per_page: 10,
            current_page: 1
        }).then(function (page) {
            expect(page).to.be.have.property('per_page').with.equal(10)
            expect(page).to.be.have.property('data').with.length.at.most(page.per_page)
        })
    })

})
