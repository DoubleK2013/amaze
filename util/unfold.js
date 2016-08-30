import glob from 'glob'
export default function unfold(pattern) {
    if(typeof pattern === 'string') {
        return glob.sync(pattern)
    }
    else if(Array.isArray(pattern)) {
        return pattern.map((value) => unfold(value)).reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    }
    return []
}