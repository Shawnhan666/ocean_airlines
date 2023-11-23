import React, { Component } from "react"

// Get all the elements to build the matrix
import MatrixQ from "../../../../general/question-formats/MatrixQ"
import {
  DisagreeAgree5,
  DisagreeAgree7,
} from "../../../../general/question-formats/scales/DisagreeAgree5"
import { getConditionalsMulti } from "../../../../general/question-formats/conditionals/getConditionals"

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from "../../../../general/buttons/ChangePageButtons"

export default class InformationSharing extends Component {
  state = {
    name: "InformationSharing",
  }

  // Scroll to the top when this component starts
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { player, pageDbIndex, min } = this.props

    // Prepare the questions for this matrix
    const questions = [
      "Communication was a problem in my team",
      "Members of my team well informed each other about task-related issues",
      "The quality of information exchanged in our team was good",
      "If you are paying attention, please select “strongly agree”",
      "I got new facts, insights, and ideas from other team members",
    ]
    const responseScale = DisagreeAgree7

    // Prepare conditional for the 'next' button
    const disabledCondition = getConditionalsMulti(
      player,
      this.state.name,
      questions
    )

    return (
      <div>
        <MatrixQ
          player={player}
          dbIndex={this.state.name}
          questions={questions}
          responseScale={responseScale}
          head={"During the team interaction…"}
        />

        <br />

        <ChangePageButtons
          player={player}
          pageDbIndex={pageDbIndex}
          min={min}
          disabledCondition={disabledCondition}
        />
      </div>
    )
  }
}
