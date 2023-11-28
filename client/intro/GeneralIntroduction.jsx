import React, { Component } from "react"
import { Centered } from "meteor/empirica:core"
import DevWrapper from "../general/dev-wrapper/DevWrapper"
import ChangePageButtons from "../general/buttons/ChangePageButtons"

// General introduction to the game
export default class GeneralIntroduction extends Component {
  // Finish the stage
  next = () => {
    const { player, pageDbIndex, max } = this.props
    let currentPage = player.get(pageDbIndex)
    currentPage++

    if (currentPage > max) {
      player.stage.submit()
    } else {
      player.set(pageDbIndex, currentPage)
    }
  }
  render() {
    const { hasNext, onNext, player, pageDbIndex, game, min } = this.props
    const { condition } = game.treatment
    return (
      <DevWrapper {...this.props}>
        <Centered>
          <h2>General Instructions</h2>

          <div className="game-instructions">
            <p>
              <strong>Welcome to our study!</strong>
            </p>

            <p>
              You will be working in a group to create a slogan for Ocean Air,
              promoting its new service between Boston's Logan Airport and
              Nantucket Island.
            </p>
            <ul>
              <li>
                Your group will submit 2 slogans as final submissions.{" "}
                <strong>
                  <u>Each slogan should be no more than two sentences long</u>
                </strong>
                .
              </li>
              <li>
                {condition !== "control" &&
                  "A trained algorithm will evaluate each slogan."}{" "}
                We will select{" "}
                <strong>
                  the 5 most creative slogans and reward an additional $10 for
                  each idea.
                </strong>
              </li>
              <li>
                Your group will have 10 minutes in total to discuss and choose
                your final slogans. At the 5-minute point, you have an
                opportunity to review your initial ideas{" "}
                {condition !== "control" &&
                  "(and we will use the same algorithm to provide you with preliminary feedback on the slogans you already have)"}
                .
              </li>
            </ul>
          </div>
          <br />

          {/* Empirica introduction buttons */}
          {/* <ChangePageButtons
            player={player}
            pageDbIndex={pageDbIndex}
            min={min}
          /> */}

          <ChangePageButtons
            player={player}
            pageDbIndex={pageDbIndex}
            min={min}
          />
        </Centered>
      </DevWrapper>
    )
  }
}
