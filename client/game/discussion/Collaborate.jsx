import React, { Component } from "react"
import InformationLine from "../../general/information-line/InformationLine"

import Chat from "./chats/Chat"
import ChatTeam from "./chats/ChatTeam"
import CollabEditor from "../../general/collab/CollabEditor"
import EarlySubmission from "./EarlySubmission"
import CluesTable from "../../general/information/CluesTable"
import Tabs from "./tabs/Tabs"

// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

export default class Collaborate extends Component {
  render() {
    const { game, round, player, stage } = this.props

    return (
      <div>
        <InformationLine {...this.props} />
        <br />

        <div className="game-instructions">
          <p>
            To help your team to get started, the marketing department has given
            your team Ocean Air's major offerings.
          </p>
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
        </div>
        <br />
        <div className="game-tip">
          <p>
            Please use the collaborative text areas to slogans that are creative
            - those that strike people as unusual and novel, but are also useful
            in attracting customers and persuading them to take Ocean Air.
          </p>
          <p>
            <strong>
              <u>Each slogan must be no more than 2 sentences long.</u>
            </strong>
          </p>
          <p>
            Remember, you can use the chat room to discuss your ideas with your
            teammates.
          </p>

          <p>
            You have 5 minutes in total to come up with your{" "}
            {stage.name === "interaction_2" && "final "}ideas.
          </p>
        </div>

        <br />
        <div className="collab-columns">
          {/* For each communication patter create a chat */}
          <div className="collab-holder">
            {stage.name === "interaction_2" && (
              <>
                {" "}
                <p>
                  <strong>Your previous submission:</strong>
                </p>
                <p>
                  <em>
                    {round.get(`collabText_interaction_1_1`) ||
                      "you did not submit an idea"}
                  </em>
                </p>
              </>
            )}
            <p>
              <strong>
                {stage.name === "interaction_2" && "Final Submission for "}
                Slogan One:
              </strong>
            </p>
            <div className="collab-n-chat">
              <CollabEditor
                editorKey={`collabText_interaction_${stage.name === "interaction_1" ? "1" : "2"}_1`}
                number={1}
                {...this.props}
              />
            </div>
            {stage.name === "interaction_2" && (
              <>
                <p>
                  <strong>Your previous submission:</strong>
                </p>
                <p>
                  <em>
                    {round.get(`collabText_interaction_1_2`) ||
                      "you did not submit an idea"}
                  </em>
                </p>
              </>
            )}
            <p>
              <strong>
                {stage.name === "interaction_2" && "Final Submission for "}
                Slogan Two:
              </strong>
            </p>
            <div className="collab-n-chat">
              <CollabEditor
                editorKey={`collabText_interaction_${stage.name === "interaction_1" ? "1" : "2"}_2`}
                number={2}
                {...this.props}
              />
            </div>
          </div>

          <br />
          <div style={chatHolder}>
            <ChatTeam team={game._id} type="team" {...this.props} />
          </div>
        </div>

        <br />

        <div className="game-tip">
          <p>
            Reminder: You will be advanced to the next stage after the 5 minutes
            timer.
          </p>
          <p>
            If you are happy with your submission please click submit. If
            everyone chooses to submit early, you will all advance to the next
            stage before the 5 minute countdown
          </p>
          <p>
            <strong>
              <u>
                Please remember to click the save buttons before moving on to
                the next page!
              </u>
            </strong>
          </p>
        </div>

        <div className="button-holder">
          <button onClick={(e) => player.stage.submit()}>
            {" "}
            {this.props.player.stage.submitted
              ? "Waiting for the others..."
              : "Submit"}
          </button>
        </div>
        {/* <div className="tab-content">
          <h3 className="justify-center">Early Submission</h3>
          <EarlySubmission stage={stage} player={player} round={round} />
        </div> */}
      </div>
    )
  }
}

const chatHolder = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: "2rem",
  marginLeft: "40px",
  flexWrap: "wrap",
  width: "30%",
  height: "100%",
}
