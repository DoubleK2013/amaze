import _ from 'lodash'
import glob from 'glob'
/**
 * Get files by glob patterns
 */
export default function getGlobbedPaths(globPatterns, excludes) {
    // URL paths regex
    const urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i')
    // The output array
    let output = []
    // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
    if (_.isArray(globPatterns)) {
        globPatterns.forEach(function (globPattern) {
            output = _.union(output, getGlobbedPaths(globPattern, excludes))
        })
    } else if (_.isString(globPatterns)) {
        if (urlRegex.test(globPatterns)) {
            output.push(globPatterns)
        } else {
            let files = glob.sync(globPatterns)
            if (excludes) {
                files = files.map(function (file) {
                    if (_.isArray(excludes)) {
                        for (let i in excludes) {
                            file = file.replace(excludes[i], '')
                        }
                    } else {
                        file = file.replace(excludes, '')
                    }
                    return file
                })
            }
            output = _.union(output, files)
        }
    }
    return output
}