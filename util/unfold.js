import glob from 'glob'
export default function unfold(pattern) {
    if(typeof pattern === 'string') {
        return glob.sync(pattern)
    }
    else if(Array.isArray(pattern)) {
        return pattern.map((value) => {
            return unfold(value)
        }).reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue)
        }, [])
    }
}