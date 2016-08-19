export default function flattened (a) {
    if(a == null) {
        return []
    }
    if(Array.isArray(a)){
        return a.map((value) => {
            return flattened(value)
        }).reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue)
        }, [])
    }
    else {
        return Array.of(a)
    }
}