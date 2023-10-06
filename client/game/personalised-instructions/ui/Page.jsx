import React, { Component } from "react"

// Importing the pages
import GeneralIntroduction from "../../../intro/GeneralIntroduction"
import Background from "../../../intro/Background"
import Quiz from "../pages/Quiz"
import SharedInfo from "../../../intro/SharedInfo"
import TeamInformation from "../pages/TeamInformation"
import IntroDiscussion from "../pages/IntroDiscussion"
import TestIncentives from "../pages/TestIncentives"
import DiscussionInstructionsPage from "../pages/DiscussionInstructionsPage"
import UniqueInformation from "../pages/UniqueInformation"
import SummaryInfo from "../pages/SummaryInfo"
import IncentivesManipulation from "../pages/IncentivesManipulation"
import BrokerageManipulation from "../pages/BrokerageManipulation"
import TestCommunication from "../pages/TestCommunication"
// Based on the currentPage number (that the player can change with navigating buttons),
// show that page and passed down all the props.

export default class Page extends Component {
  render() {
    const { player, pageDbIndex } = this.props
    let currentPage = player.get(pageDbIndex)

    if (currentPage === 1) {
      return <GeneralIntroduction {...this.props} />
    } else if (currentPage === 2) {
      return <Background {...this.props} />
    } else if (currentPage === 3) {
      return <Quiz {...this.props} />
    } else if (currentPage === 4) {
      return <SharedInfo {...this.props} />
    } else if (currentPage === 5) {
      return <TeamInformation {...this.props} />
    } else if (currentPage === 6) {
      return <SummaryInfo {...this.props} />
    } else if (currentPage === 7) {
      return <IntroDiscussion {...this.props} />
    } else if (currentPage === 8) {
      return <BrokerageManipulation {...this.props} />
    } else if (currentPage === 9) {
      return <TestCommunication {...this.props} />
    } else if (currentPage === 10) {
      return <IncentivesManipulation {...this.props} />
    } else if (currentPage === 11) {
      return <TestIncentives {...this.props} />
    } else if (currentPage === 12) {
      return <DiscussionInstructionsPage {...this.props} />
    }
  }
}
