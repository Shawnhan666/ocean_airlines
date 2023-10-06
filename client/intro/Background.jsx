import React, { Component } from "react"
import { Centered } from "meteor/empirica:core"
import DevWrapper from "../general/dev-wrapper/DevWrapper"
import ChangePageButtons from "../general/buttons/ChangePageButtons"

import TheatreLogo from "../general/images/TheatreLogo"

// Background for the case
export default class Background extends Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, pageDbIndex, min, player } =
      this.props

    return (
      <DevWrapper {...this.props}>
        <Centered>
          <div className="game-instructions">
            <p>
              {" "}
              Ocean Air is a specialized, regional airline operating in New
              England and has commissioned your team to create advertising
              slogans to be used as the core of their new marketing campaign.
            </p>
            <p>
              The marketing director has given instructions that you should
              create slogans that are creative - those that{" "}
              <strong>
                <u>
                  strike people as unusual and novel, but are also useful in
                  attracting customers
                </u>
              </strong>{" "}
              and persuading them to take Ocean Air.
            </p>
            <p>
              To help your team to get started, the marketing department has
              given your team Ocean Air's major offerings.
            </p>
          </div>
          <br />
          <img
            src="./img/decoration/OceanAirlines.png"
            alt=""
            className="img-center"
            style={{ width: "460px", height: "208px" }}
          />

          <br />
          <ol>
            <li>
              <p>Convenience</p>
              <p>
                {" "}
                Ocean Air will provide helicopter flights between Boston and
                Nantucket every hour daily from early morning through early
                evening. Seat availability is guaranteed.
              </p>
            </li>
            <li>
              {" "}
              <p>Attractive destinations</p>
              <p>
                Nantucket is a highly attractive destination, offering a variety
                of summer activities including swimming, boating, tennis,
                hiking, and fishing, as well as historical sites and fine
                dining.
              </p>
            </li>
            <li>
              <p>Sustainability</p>

              <p>
                Ocean Air has purchased electric multirotor helicopters that
                will serve the passengers. It has also committed to using
                sustainable fuels that reduce carbon emission by 75%.
              </p>
            </li>
          </ol>
          <br />

          <br />

          <p className="button-holder">
            <button
              type="button"
              onClick={(e) => player.stage.submit()}
              disabled={player.stage.submitted}
            >
              {this.props.player.stage.submitted
                ? "Waiting for the others..."
                : "Submit"}
            </button>
          </p>
        </Centered>
      </DevWrapper>
    )
  }
}
