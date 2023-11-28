import React, { Component } from "react"
import InformationLine from "../../general/information-line/InformationLine"
import { StageTimeWrapper } from "meteor/empirica:core"

// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

class feedback extends Component {
  render() {
    const { game, round, player, remainingSeconds, stage } = this.props

    const idea1 =
      round.get(`collabText_interaction_1_1`) ||
      "you did not submit an idea"
    const idea2 =
      round.get(`collabText_interaction_1_2`) ||
      "you did not submit an idea"

    const { condition } = game.treatment

    const showLoading = remainingSeconds > stage.durationInSeconds - 7

    if (showLoading) {
      return (
        <div>
          <InformationLine {...this.props} />
          <div className="loader"></div>
          <p>
            Please wait a moment while we use the trained algorithm to evaluate
            your slogans and provide feedback.
          </p>
        </div>
      )
    }

    return (
      <div>
        <InformationLine {...this.props} />
        <br />

        <p>Below are the 2 slogans the team produced so far:</p>
        <ol>
          <li>{idea1}</li>
          <li>{idea2}</li>
        </ol>

        <p>
          We will be using our trained algorithm to evaluate the creativity of
          slogans submitted by all participants. This will determine the 5 most
          creative slogans that will recieve the bonus $10
        </p>
        {condition !== "control" && (
  <div className="game-instructions">
    <p>
      Our algorithm has identified Slogan No.{" "}
      {condition === "align"
        ? game.get("most_creative").slice(-1)
        : game.get("least_creative").slice(-1)}
      :
    </p>
    <p style={{ textAlign: "center" }}>
      <em>
        {condition === "align"
          ? (game.get("most_creative") === "idea1" ? idea1 : idea2)
          : (game.get("least_creative") === "idea1" ? idea1 : idea2)}
      </em>
    </p>
    <p>as the most creative from your submission.</p>
  </div>
)}



        {/* {condition !== "control" && (
          <div className="game-instructions">
            <p>
              Our algorithm has identified Slogan No.{" "}
              {condition === "align"
                ? game.get("most_creative").slice(-1)
                : game.get("least_creative").slice(-1)}{" "}
              as the most creative from your submission.
            </p>
            <p>
              {" "}
              <em>
                {condition === "align"
                  ? round.get(
                      `collabText${game._id}_interaction_1_${game
                        .get("most_creative")
                        .slice(-1)}`
                    )
                  : round.get(
                      `collabText${game._id}_interaction_1_${game
                        .get("least_creative")
                        .slice(-1)}`
                    )}
              </em>{" "}
            </p>
          </div>
        )} */}
        <br />
        <p>
          On the next page your group will have 5 more minutes to revise and
          finalize your 2 slogans
        </p>

        <div className="button-holder">
          <button onClick={(e) => player.stage.submit()}>
            {" "}
            {this.props.player.stage.submitted
              ? "Waiting for the others..."
              : "Submit"}
          </button>
        </div>
      </div>
    )
  }
}

export default Feedback = StageTimeWrapper(feedback)
