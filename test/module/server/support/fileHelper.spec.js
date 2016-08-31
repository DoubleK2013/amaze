import {expect} from 'chai'
import * as fileHelper from '../../../../module/server/support/fileHelper'

describe('fileHelper', function () {
    it('fileupload', function (done) {
        fileHelper.fileupload([
            {
                name: 'fileName',
                size: 1024
            },
            {
                name: 'fileName',
                type: 'image/png',
                size: 1024 * 1024 + 1
            },
            {
                name: 'fileName',
                type: 'image/png',
                size: 1024
            }
        ]).then(function (result) {
            expect(result[0]).to.have.property('code').with.equal(1)
            expect(result[1]).to.have.property('code').with.equal(2)
            expect(result[2]).to.have.property('code').with.equal(9)
            expect(result).to.have.length(3)
            done()
        })
    })

    it('fileupload empty', function () {
        return fileHelper.fileupload([]).then(function (result) {
            expect(result[0]).to.have.property('code').with.equal(3)
        })
    })

    it('clearTmpFiles', function (done) {
        fileHelper.clearTmpFiles().then(function (result) {
            expect(result).to.be.a('array')
            done()
        })
    })
})