export default function flattened2(a) {
    if(a == null) {
        return []
    }
    return [..._flattened(a)]
}

function* _flattened(a) {
    if(Array.isArray(a)) {
        for(const value of a) {
            yield* _flattened(value)
        }
    }
    else {
        yield a
    }
}