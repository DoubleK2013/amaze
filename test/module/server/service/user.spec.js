import {expect} from 'chai'
import Mongoose from '../../../../config/lib/mongoose'

import * as user from '../../../../module/server/service/user'

describe('user service', function () {

    before(function(done) {
        Mongoose.connect().then(function () {
            console.log(`
            -- mongodb had connected --
            `)
            done()
        })
    })

    after(function (done) {
        Mongoose.disconnect().then(function () {
            console.log(`
            -- mongodb had disconnected --
            `)
            done()
        })
    })

    it('findPageable', function(done) {
        user.findPageable({
            per_page: 10,
            current_page: 1
        }).then(function (page) {
            expect(page).to.be.have.property('per_page').with.equal(10)
            expect(page).to.be.have.property('data').with.length.at.most(page.per_page)
            done()
        })
    })

})
