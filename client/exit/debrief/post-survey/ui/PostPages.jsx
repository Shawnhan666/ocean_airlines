import React, { Component } from "react"

// Importing pages
import ManiupulationCheck from "../pages/ManipulationCheck"
import GroupEfficacy from "../pages/GroupEfficacy"
import PsychSafety from "../pages/PsychSafety"
import TaskConflict from "../pages/TaskConflict"
import InformationSharing from "../pages/InformationSharing"
import IdeasReasoning from "../pages/IdeasReasoning"
import Demographics from "../pages/Demographics"
import ProcessClarity from "../pages/ProcessClarity"

// Based on the currentPage number (that the player can change with navigating buttons),
// show that page and passed down all the props.

export default class PostPages extends Component {
  render() {
    const { pageDbIndex, player } = this.props
    let currentPage = player.get(pageDbIndex)

    if (currentPage === 1) {
      return <ManiupulationCheck {...this.props} />
    } else if (currentPage === 2) {
      return <GroupEfficacy {...this.props} />
    } else if (currentPage === 3) {
      return <PsychSafety {...this.props} />
    } else if (currentPage === 4) {
      return <TaskConflict {...this.props} />
    } else if (currentPage === 5) {
      return <InformationSharing {...this.props} />
    } else if (currentPage === 6) {
      return <ProcessClarity {...this.props} />
    } else if (currentPage === 7) {
      return <IdeasReasoning {...this.props} />
    } else if (currentPage === 8) {
      return <Demographics {...this.props} />
    }
  }
}
