import _ from 'lodash'
export default function toNumber(value, defaultValue) {
    if([NaN].includes(_.toNumber(value))) {
        return defaultValue
    }
    return _.toNumber(value)
}