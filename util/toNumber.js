import {toNumber as _toNumber} from 'lodash'
export default function toNumber(value, defaultValue) {
    if([NaN].includes(_toNumber(value))) {
        return defaultValue
    }
    return _toNumber(value)
}