import {expect} from 'chai'
import * as fileHelper from '../../../../module/server/support/fileHelper'

describe('fileHelper', function () {
    it('fileupload', function (done) {
        fileHelper.fileupload([
            {
                name: 'fileName',
                size: 1024 * 1024 + 1
            },
            {
                name: 'fileName',
                size: 1024 * 1024 + 1
            },
            {
                name: 'fileName',
                size: 1024 * 1024 + 1
            }
        ]).then(function (result) {
            expect(result).to.have.length(3)
            done()
        })
    })
})