import React, { Component } from "react"

export default class ExitSurvey extends Component {
  static stepName = "ExitSurvey"
  state = { feedback: "" }

  handleChange = (e) => {
    const { player } = this.props
    const text = e.currentTarget.value
    this.setState({ feedback: text })
    player.set("feedback", text)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    const { player, onSubmit } = this.props
    const { feedback } = this.state

    return (
      <div>
        <h3>Debrief and feedback</h3>
        <p>
          Thank you for participating in this study! The intent of this research
          is to study how teams communicate with each other and engage in
          innovative tasks.
        </p>
        <p>
          Please allow us 5 business days to process your basic compensation
          (£2.70).
        </p>
        <p>
          Please allow us 4 business weeks to calculate all teams scores and
          process bonus payments.
        </p>

        <p>
          If you have any further questions please reach out to our Prolific
          account.
        </p>

        <div className="button-holder">
          <button
            className="main-btn"
            onClick={() => {
              window.location =
                "https://app.prolific.com/submissions/complete?cc=CUZPQZDO"
            }}
          >
            Submit and return to Prolific
          </button>
        </div>
      </div>
    )
  }
}
