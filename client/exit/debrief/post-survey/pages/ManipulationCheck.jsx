import React, { Component } from "react"

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import { getConditionalsMulti } from "../../../../general/question-formats/conditionals/getConditionals"
import MatrixQ from "../../../../general/question-formats/MatrixQ"
import ChangePageButtons from "../../../../general/buttons/ChangePageButtons"
import { DisagreeAgree7 } from "../../../../general/question-formats/scales/DisagreeAgree5"

export default class ManipulationCheck extends Component {
  state = {
    name: "manipulationCheck",
  }

  // Scroll to the top when this component starts
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { player, pageDbIndex, min } = this.props

    // Prepare the questions for this matrix
    const questions = [
      "We received feedback aligning with my group’s  idea of creativity - (ie, the most creative idea we ranked was also selected by the algorithm as the most creative one)",
      "We received feedback misaligning with my group’s idea of creativity - (ie, the most creative idea we ranked was NOT selected by the algorithm as the most creative one)",
      "My group did not receive any feedback on our ideas in terms of which one was the most creative",
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
          head={
            "Please indicate the extent to which you agree with the following statements:"
          }
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
