import { expect } from 'chai'

import util from '../../util'

describe('util', function () {
    it('unfold test', function() {
        expect(util.unfold(['config/dev/generator/*.js'])).to.eql(util.unfold('config/dev/generator/*.js'))
    })
})
