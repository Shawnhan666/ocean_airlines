import React, { Component } from "react"

export default class Demographics extends Component {
  state = {
    name: "Demographics",
  }

  // Change page back
  previous = () => {
    const { player, pageDbIndex } = this.props
    let currentPage = player.get(pageDbIndex)
    currentPage--
    player.set(pageDbIndex, currentPage)
  }

  // Change the player's languge response when they change their input
  handleChangeTeammate = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.teammate = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Change the player's gender response when they change their input
  handleChangeGender = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.gender = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Change the player's ethinicity response when they change their input
  handleChangeEthnicity = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.ethnicity = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Change the player's age response when they change their input
  handleChangeAge = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.age = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Change the player's work experience response when they change their input
  handleChangeWork = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.work = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Change the player's languge response when they change their input
  handleChangeLanguage = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.language = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Change the player's comment when they change their input
  handleChangeComment = (e) => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    demographics.comment = e.currentTarget.value
    player.set(this.state.name, demographics)
  }

  // Check that the player has answered all the demographic questions that they have to answer
  getAllDemographics = () => {
    const { player } = this.props

    let demographics = player.get(this.state.name) ?? {}
    let isDisabled = true
    if (
      demographics.gender !== "" &&
      demographics.ethnicity !== "" &&
      demographics.work !== "" &&
      demographics.age > 17
    ) {
      isDisabled = false
    }

    return isDisabled
  }

  render() {
    // Need the onSubmit because this is the last survey, players must be able to end this survey.
    const { player, onSubmit } = this.props

    // Get the players answers for this survey, if they don't have any, set an empty object
    const answers = player.get(this.state.name) ?? {}

    return (
      <div>
        <p>
          In the game, were your teammates responsive (e.g. replying to messages
          and contributing to the slogans)?{" "}
        </p>
        <select
          name="language"
          onChange={this.handleChangeTeammate}
          value={answers.teammate}
        >
          <option value="">Select your answer</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <br />
        <p>Please indicate your gender</p>
        <select
          name="gender"
          onChange={this.handleChangeGender}
          value={answers.gender}
        >
          <option value="">Select your answer</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />

        <p>Please indicate your ethnicity</p>
        <select
          name="ethnicity"
          value={answers.ethnicity}
          onChange={this.handleChangeEthnicity}
        >
          <option value="">Select your answer</option>
          <option value="White">White</option>
          <option value="Hispanic or Latino">Hispanic or Latino</option>
          <option value="Black or African American">
            Black or African American
          </option>
          <option value="Asian/Pacific Islander">Asian/Pacific Islander</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />

        <p>Please indicate your age</p>
        <input
          type="number"
          name="age"
          min="18"
          max="75"
          size="20"
          value={answers.age}
          onChange={this.handleChangeAge}
        />
        <br />
        <br />

        <p>Please indicate your number of years of working experience</p>
        <p style={{ color: "grey" }}>
          If you have been working less than 6 months round down to 0, if you
          have been working more than 6 months round up to 1
        </p>
        <input
          type="number"
          name="work"
          min="0"
          max="99"
          size="20"
          value={answers.work}
          onChange={this.handleChangeWork}
        />
        <br />
        <br />

        <p>Please indicate if English is your first language</p>
        <select
          name="language"
          onChange={this.handleChangeLanguage}
          value={answers.language}
        >
          <option value="">Select your answer</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <br />

        <p>
          If you have any additional comments about the game, please write them
          here:
        </p>
        <textarea
          name="comment"
          autoComplete="off"
          value={answers.comment}
          onChange={this.handleChangeComment}
          style={{ width: "500px", height: "200px" }}
        ></textarea>
        <br />
        <br />

        <p className="button-holder">
          <button type="button" onClick={this.previous}>
            Previous
          </button>
          &emsp;
          <button
            type="button"
            onClick={onSubmit}
            disabled={this.getAllDemographics()}
          >
            Finish and go to debrief
          </button>
        </p>
      </div>
    )
  }
}
