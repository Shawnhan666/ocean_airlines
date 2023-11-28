import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

// Component based on the timer that serves as the early submission (players can submit the discussion stage early)
class timer extends React.Component {

    // If players click on early submission, set it to true, record at what time they did so, and submit
    handleEarlySubmission = () => {
        const { player, remainingSeconds } = this.props

        player.set("isEarlySubmission", true);
        player.set("earlySubmissionTime", remainingSeconds);
        player.stage.submit();
    }

    render() {
        const { remainingSeconds, player, round } = this.props;
        // Has the player submitted early
        const isEarlySubmission = player.get("isEarlySubmission")

        // If this is not yet the time to early submit
        if (remainingSeconds > round.get("earlySubTimeNum")) {
            return (
                <div>
                    <p>You can only provide an early submission once {round.get("earlySubTimeText")} minutes are left on the timer.</p>
                </div>
            )
        } else {
            // If it is the time to early submit, show all the instructions and provide the button to submit early
            return (
                <div>
                    <p>
                        You can now provide an early submission. This means that you think you have acquired sufficient information and you do not wish to continue the discussion for the full {round.get("discussionTime")} minutes.
                    </p>

                    <br />

                    <div className="game-instructions">
                        <div>
                            You can provide your early submission by clicking on the button below. <br /> <strong>Careful! Once you provide early submission you cannot go back.</strong>
                        </div>
                    </div>

                    <br />

                    <p>
                        However, note that you will only be moved on to the next stage <strong><u>if all six player have provided early submission</u></strong>. In the meantime, you will still be able to send messages, receive messages, and check clues. Players who have provided early submission will be indicated by a tick instead of a cross next to their avatar at the top of the screen.
                    </p>

                    <p className="button-holder">
                        <button type="button" onClick={this.handleEarlySubmission} disabled={isEarlySubmission}>
                            {isEarlySubmission ? "You have provided early submission!" : "Provide early submission"}
                        </button>
                    </p>
                </div>
            )
        }
    }
}

// Export this as early submission with the stage time wrapper that makes it a timer
export default (EarlySubmission = StageTimeWrapper(timer));