import React, { Component } from "react"
import { Centered } from "meteor/empirica:core"
import DevWrapper from "../general/dev-wrapper/DevWrapper"
import ChangePageButtons from "../general/buttons/ChangePageButtons"

export default class LobbyJoin extends Component {
  // Setting the state of the screenName
  state = {
    screenName: "",
  }

  // Updating the state of the screenName when text input changes
  // if screenName are below 4
  handleChange = (e) => {
    const value = e.currentTarget.value
    if (value.length <= 20) {
      this.setState({ screenName: value })
    }
  }

  // When the user submits their screenName...
  handleSubmit = (e) => {
    // Prevent default behaviour
    e.preventDefault()

    // Get the entered screenName
    const { screenName } = this.state

    // Check that this is 4 characters...
    if (!screenName) {
      // ...If not, alert the user that this is wrong and they need to try again
      alert("Error: Please enter a screen name")
    } else {
      // ...If correct, set the players screenName and end this stage for them
      this.props.player.set("screenName", screenName)
    }
  }

  render() {
    const { hasPrev, hasNext, onNext, onPrev, player, pageDbIndex, min } =
      this.props

    // Get the player's screenName, if they have no screenName, ask them for screenName.
    // If they have screenName, show the thank you message with the screenName

    return (
      <DevWrapper {...this.props}>
        <Centered>
          <div className="instructions">
            <div>
              <div className="game-instructions">
                <p>
                  Please make sure that you have{" "}
                  <strong>sound activated</strong> on your computer as we will
                  use light bell sounds to signal when certain phases of the
                  study start and when you receive messages in the study.
                </p>

                <p>
                  If you encounter a problem or a blank page for more than a few
                  seconds,{" "}
                  <strong>please feel free to refresh the page.</strong>
                </p>

                <p>
                  Please press the submit button to continue.{" "}
                  <strong>
                    You will enter a lobby and wait a maximum of 3 minutes while
                    we connect you with other players.
                  </strong>
                </p>
              </div>

              <p className="button-holder">
                <button type="submit" onClick={onNext}>
                  Submit and join the lobby
                </button>
              </p>
            </div>
          </div>
        </Centered>
      </DevWrapper>
    )
  }
}
