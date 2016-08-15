import { expect } from 'chai'

import util from '../../util'

describe('util', function () {
    it('unfold', function() {
        expect(util.unfold(['config/dev/generator/*.js'])).to.eql(util.unfold('config/dev/generator/*.js'))
    })
    it('toNumber', function() {
        expect(util.toNumber(0x10)).to.be.equal(16)
        expect(util.toNumber('0x10')).to.be.equal(16)
        expect(util.toNumber('a', 10)).to.be.equal(10)
        expect(util.toNumber('0b101')).to.be.equal(5)
    })
})
