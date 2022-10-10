// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(preValue => ({
      isSubscribed: !preValue.isSubscribed,
    }))
  }

  onSubscribe = () => {
    this.setState(preValue => ({
      isSubscribed: !preValue.isSubscribed,
    }))
  }

  authButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button className="button" type="button" onClick={this.onSubscribed}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.onSubscribe}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        {this.authButton()}
      </div>
    )
  }
}

export default Welcome
