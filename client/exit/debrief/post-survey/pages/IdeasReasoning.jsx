import React, { Component } from "react"

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from "../../../../general/buttons/ChangePageButtons"

export default class IdeasReasoning extends Component {
  state = {
    idea1Reasoning: "",
    idea2Reasoning: "",
  }

  // Scroll to the top when this component starts
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // Change the player's comment when they change their input
  handleChange = (e) => {
    const { player } = this.props

    player.set(e.currentTarget.name, e.currentTarget.value)
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  }

  render() {
    const { player, pageDbIndex, min } = this.props
    const { idea1Reasoning, idea2Reasoning } = this.state

    return (
      <div>
        <p>
          <strong>
            Please describe the process and reasoning behind how you chose your
            final ideas:
          </strong>
        </p>

        <p>
          <strong>Stage 1 - Before your group ranked your initial ideas</strong>
        </p>
        <textarea
          name="idea1Reasoning"
          autoComplete="off"
          value={idea1Reasoning}
          onChange={this.handleChange}
          style={{ width: "500px", height: "200px" }}
        ></textarea>

        <p>
          <strong>
            Stage 2 - After your group ranked your slogans, and finalizing the
            final submissions
          </strong>
        </p>
        <textarea
          name="idea2Reasoning"
          autoComplete="off"
          value={idea2Reasoning}
          onChange={this.handleChange}
          style={{ width: "500px", height: "200px" }}
        ></textarea>

        <br />
        <ChangePageButtons
          player={player}
          pageDbIndex={pageDbIndex}
          min={min}
          disabledCondition={false}
        />
      </div>
    )
  }
}
