import React, {Component} from 'react'
import './Dice.css'

class Dice extends Component {
  static defaultProps = {faces: ['one', 'two', 'three', 'four', 'five', 'six']}
  render() {
    const arr = this.props.faces
    const iconClass = `fas fa-dice-${arr[this.props.current]}`
    return (
      <div className={this.props.addClass}>
        <i className={iconClass}></i>
      </div>
    )
  }
}

export default Dice