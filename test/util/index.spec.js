import { expect } from 'chai'

import util from '../../util'

describe('util', function () {
    it('unfold', function () {
        expect(util.unfold(['config/dev/generator/*.js'])).to.eql(util.unfold('config/dev/generator/*.js'))
    })
    it('toNumber', function () {
        expect(util.toNumber(10)).to.be.equal(10)
        expect(util.toNumber('10')).to.be.equal(10)
        expect(util.toNumber('0xa')).to.be.equal(10)
        expect(util.toNumber('0b1010')).to.be.equal(10)
        expect(util.toNumber('a', 10)).to.be.equal(10)
    })
    it('flattened', function () {
        expect(util.flattened(null)).to.be.eql([])
        expect(util.flattened(undefined)).to.be.eql([])
        expect(util.flattened([])).to.be.eql([])
        expect(util.flattened(0)).to.be.eql([0])
        expect(util.flattened([[],[[]],[]])).to.be.eql([])
        expect(util.flattened('a')).to.be.eql(['a'])
        expect(util.flattened([['a'], ['a', 'b', ['c', ['d']]]])).to.be.eql(['a', 'a', 'b', 'c', 'd'])
        expect(util.flattened([['a'], ['b'], {c: ['d', 'e'], f: 2}, 10])).to.be.eql(['a', 'b', {c: ['d', 'e'], f: 2}, 10])
    })
    it('flattened2', function () {
        expect(util.flattened2(null)).to.be.eql([])
        expect(util.flattened2(undefined)).to.be.eql([])
        expect(util.flattened2([])).to.be.eql([])
        expect(util.flattened2(0)).to.be.eql([0])
        expect(util.flattened2([[],[[]],[]])).to.be.eql([])
        expect(util.flattened2('a')).to.be.eql(['a'])
        expect(util.flattened2([['a'], ['a', 'b', ['c', ['d']]]])).to.be.eql(['a', 'a', 'b', 'c', 'd'])
        expect(util.flattened2([['a'], ['b'], {c: ['d', 'e'], f: 2}, 10])).to.be.eql(['a', 'b', {c: ['d', 'e'], f: 2}, 10])
    })
})
