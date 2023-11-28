import React from "react"

//Importing UI
import DevWrapper from "../general/dev-wrapper/DevWrapper"
import { Centered } from "meteor/empirica:core"
import Alert from "../general/alert/Alert"

//Importing Stages
import PersonalisedInstructions from "./personalised-instructions/PersonalisedInstructions"
import Collaborate from "./discussion/Collaborate"
import SelfReport from "./discussion/SelfReport"
import Feedback from "./discussion/Feedback"
//Creating the round component
export default class Round extends React.Component {
  render() {
    const { round, stage, player } = this.props

    return (
      <DevWrapper {...this.props}>
        <Centered>
          {/* If in a stage the timer goes under 2min, it sets the round "alert" to true, which shows a custom alert */}
          {player.round.get("alert") & (stage.name !== "team_connect") && (
            <Alert player={player} stage={stage} />
          )}

          {/* Show the stage based on the stage name */}
          <div>
            {stage.name === "personalised_instructions" ? (
              <PersonalisedInstructions {...this.props} />
            ) : stage.name === "interaction_1" ? (
              <Collaborate {...this.props} />
            ) : stage.name === "self_report" ? (
              <SelfReport {...this.props} />
            ) : stage.name === "feedback" ? (
              <Feedback {...this.props} />
            ) : (
              <Collaborate {...this.props} />
            )}
          </div>
        </Centered>
      </DevWrapper>
    )
  }
}
