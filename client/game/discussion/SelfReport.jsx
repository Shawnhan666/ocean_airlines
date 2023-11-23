import React, { Component } from "react"
import InformationLine from "../../general/information-line/InformationLine"
import ChatTeam from "./chats/ChatTeam"
// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

export default class SelfReport extends Component {
  state = {
    most_creative: "",
    least_creative: "",
  }

  handleChange = (e) => {
    const { game } = this.props
    game.set(e.target.name, e.currentTarget.value)
    this.setState({ [e.target.name]: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    const { player, game } = this.props
    const mostCreative = game.get("most_creative") || ""
    const leastCreative = game.get("least_creative") || ""
    const answers = [mostCreative, leastCreative]

    if (!answers.includes("idea1") || !answers.includes("idea2")) {
      alert("please choose seperate ideas for each option")
      return
    }
    player.stage.submit()
  }

  render() {
    const { game, round, player } = this.props
    const idea1 =
      round.get(`collabText_interaction_1_1`) ||
      "you did not submit an idea"
    const idea2 =
      round.get(`collabText_interaction_1_2`) ||
      "you did not submit an idea"
    return (
      <div>
        <InformationLine {...this.props} />
        <br />
        <h1>Here are the slogans your group came up with:</h1>
        <ul>
          <li>{idea1}</li>
          <li>{idea2}</li>
        </ul>

        <p>
          As a team please use the dropdown menu to rank these ideas from the
          most creative to the least creative.
        </p>
        <p>Any changes made by one player will make changes for the group.</p>
        <div className="select-holder">
          <div className="select">
            <p>Most Creative:</p>
            <select
              name="most_creative"
              onChange={this.handleChange}
              value={game.get("most_creative") || ""}
            >
              <option value="">Select your answer</option>
              <option value="idea1">Idea 1</option>
              <option value="idea2">Idea 2</option>
            </select>
          </div>
          <div className="select">
            <p>Least creative:</p>
            <select
              name="least_creative"
              onChange={this.handleChange}
              value={game.get("least_creative") || ""}
            >
              <option value="">Select your answer</option>
              <option value="idea1">Idea 1</option>
              <option value="idea2">Idea 2</option>
            </select>
          </div>
        </div>

        <div style={chatHolder}>
          <ChatTeam team={game._id} type="team" {...this.props} />
        </div>

        <div className="button-holder">
          <button onClick={this.handleSubmit}>
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
