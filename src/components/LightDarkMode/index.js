// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isChangeMode: false}

  changeMode = () => {
    this.setState(prevState => ({isChangeMode: !prevState.isChangeMode}))
  }

  getButtonText = () => {
    const {isChangeMode} = this.state

    return isChangeMode ? 'Dark Mode' : 'Light Mode'
  }

  getClassText = () => {
    const {isChangeMode} = this.state

    return isChangeMode ? 'card-container-dark' : 'card-container-light'
  }

  getHeadingText = () => {
    const {isChangeMode} = this.state

    return isChangeMode ? 'heading-dark' : 'heading-light'
  }

  getButtonColor = () => {
    const {isChangeMode} = this.state

    return isChangeMode ? 'button-dark' : 'button-light'
  }

  render() {
    const buttonText = this.getButtonText()
    const classText = this.getClassText()
    const headingText = this.getHeadingText()
    const buttonColor = this.getButtonColor()
    return (
      <div className="bg-container">
        <div className={classText}>
          <h1 className={headingText}>Click to Change Mode</h1>
          <button
            type="button"
            className={buttonColor}
            onClick={this.changeMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
