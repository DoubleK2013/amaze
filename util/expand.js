export default function expand (a) {
    if(Array.isArray(a)){
        return a.map((value) => {
            return expand(value)
        }).reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue)
        }, [])
    }
    else {
        return [].concat(a)
    }
}