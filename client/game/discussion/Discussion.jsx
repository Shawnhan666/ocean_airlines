import React, { Component } from 'react';
import InformationLine from '../../general/information-line/InformationLine';
import Tabs from './tabs/Tabs';
import Chat from './chats/Chat';
import ChatTeam from './chats/ChatTeam';

// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

export default class Discussion extends Component {
    render() {
        const { game } = this.props;
        const communication = JSON.parse(game.treatment.communication)
        const teams = ["Red", "Blue", "Green"]

        return (
            <div>
                <InformationLine {...this.props} />
                <br />

                <p>
                    You now have <strong>14 minutes</strong> to discuss the information with your teammate and other teams.
                </p>
                <p>
                    On this page you will find tabs to revisit important game information, and at the bottom of the page, you will find chat boxes to send messages to the other players (according to the communication structure shown to you).
                </p>

                <Tabs {...this.props} />
                <br />

                <div className="game-tip">
                    <p>
                        <strong><u>Game Tip:</u></strong> Look at the relationships between the Teams, and think about how you might use these relationships to gain information. <strong>For example, try not to just ask for information, but also consider "trading" information with others.</strong>
                    </p>
                    <p style={{ margin: "0px" }}>
                        <strong>Have a look at the "Information Table" tab to see what sort of information the other teams might have</strong> and think about how you might obtain that information.
                    </p>
                </div>

                {/* For each communication patter create a chat */}
                <div style={chatHolder}>
                    {
                        communication.map((communicationPattern, index) => {
                            return (
                                <Chat key={"Liason" + index} communicationPattern={communicationPattern} type="liason" {...this.props} />
                            )
                        })
                    }
                    {
                        teams.map((team, index) => {
                            return (
                                <ChatTeam key={"Team" + index} team={team} type="team" {...this.props} />
                            )
                        })
                    }
                </div>

            </div >
        )
    }
}

const chatHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2rem",
    flexWrap: "wrap",
};


