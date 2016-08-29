export default function flattened (a) {
    if(a == null) {
        return []
    }
    if(Array.isArray(a)){
        return a.map((value) => flattened(value)).reduce((previousValue, currentValue) => previousValue.concat(currentValue),[])
    }
    return [a]
}