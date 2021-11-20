import React, {Component} from 'react'
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = {dice1: 1, dice2: 1, isRolling: false}
    this.roll = this.roll.bind(this)
  }
  roll() {
    const rand1 = Math.floor(Math.random()*6)
    const rand2 = Math.floor(Math.random()*6)
    this.setState({isRolling: true})
    this.setState({dice1: rand1, dice2: rand2})
    setTimeout(() => {
      this.setState({isRolling: false})      
    }, 1000);
  }
  render() {
    const diceClass = this.state.isRolling ? 'Dice Dice-animation' : 'Dice'
    const btnClass = this.state.isRolling ? 'RollDice-btn RollDice-btn-blocked' : 'RollDice-btn'
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <div className="RollDice-display">
            <Dice
              current={this.state.dice1}
              addClass={diceClass}
              />
            <Dice
              current={this.state.dice2}
              addClass={diceClass}
            />
          </div>
          <button className={btnClass} onClick={this.roll}>
            Roll Dice
          </button>
        </div>
      </div>
    )
  }
}

export default RollDice