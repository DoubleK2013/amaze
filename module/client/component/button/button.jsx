import { Component } from 'react'

import x from '../../scss/x.scss'
import style from './button.scss'

export default class Button extends Component {
    render () {
        return <button className={x.button + style.button}/>
    }
}