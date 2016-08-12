import {expect} from 'chai'

import * as user from '../../server/service/user'

describe('user service', function () {
    it('user.findPageable to be a Promise', function () {
        expect(user.findPageable()).to.be.a('promise')
    })
})
