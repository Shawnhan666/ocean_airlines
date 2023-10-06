import React, { Component } from 'react'

// All the elements to show in the tabs
import { CluesTableGameInstructions1, CluesTableGameInstructions2 } from '../../../../general/tips-n-messages/CluesTableGameInstructions';
import CluesTable from '../../../../general/information/CluesTable';
import GeneralInformation from '../../../../general/information/GeneralInformation';
import EarlySubmission from './early-submission/EarlySubmission';
import ComStructShape from '../../../../general/communication-structure/ComStructShape';
import CompetitionIncentive from '../../../../general/tips-n-messages/CompetitionIncentive';

export default class Content extends Component {
    render() {
        const { tabsStatus, collabStatus, round, player, stage } = this.props;

        // Get the tab status that is true
        const activeTab = Object.keys(tabsStatus).filter(tab => {
            return tabsStatus[tab] === true
        })[0]

        // Based on what tab is true populate the contents with the appropriate contents
        if (activeTab === "competitionStructure") {
            return (
                <div className="tab-content" >
                    <div className="justify-center"><ComStructShape {...this.props} showCompetition={true} /></div>
                    <br />
                    <CompetitionIncentive {...this.props} />
                </div>
            )
        } else if (activeTab === "cluesTable") {
            return (
                <div className="tab-content" >
                    {stage.name === "discussion" && 
                        <div className="game-tip">
                        <p>
                        When your team acquires a new piece of information from another team, you should fill in the blank slot. This allows you to keep track of the information you collected AND it allows us to calculate your final scores!
                        </p>
                    </div>
                    }

                    <br />
                    
                    <CluesTable {...this.props} />

                </div>
            )
        } else if (activeTab === "sharedInfo") {
            return (
                <div className="tab-content">
                    <GeneralInformation />
                </div>
            )
        } else if (activeTab === "earlySub") {
            return (
                <div className="tab-content">
                    <EarlySubmission stage={stage} player={player} round={round} />
                </div>
            )
        } else {
            // If no tab is important, show this message
            return (
                <div className="tab-content">
                    <p style={{
                        margin: "0",
                        padding: "0",
                        textAlign: "center",
                        fontSize: "12pt",
                    }}>
                        Click a tab to revisit important game information
                    </p>
                </div>
            )
        }
    }
}
