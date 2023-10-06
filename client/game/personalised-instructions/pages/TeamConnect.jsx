import React, { Component } from 'react';
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import ChatTeam from '../../discussion/chats/ChatTeam';
import CluesTable from '../../../general/information/CluesTable';
import { CluesTableGameInstructions1, CluesTableGameInstructions2 } from '../../../general/tips-n-messages/CluesTableGameInstructions';



// HOLDS ALL THE ELEMENTS OF THE DISCUSSION

export default class TeamConnect extends Component {
    render() {
        const { game , round, player, min, pageDbIndex } = this.props;
        const teams = ["Red", "Blue", "Green"]

        return (
            <div>
                <h2>Teammate Connect</h2>
                <p>
                    Below is a table that details what unique information is available to the other two teams, in question forms. This table will play a central role in this exercise. 
                </p>

                <p>
                    Please take the next 2 minutes to get acquainted with your teammate. We suggest using this time to <em>strategize</em>—figure out what unique information from the other two teams seem most valuable to you as a team. 
                </p>

                <p>
                    Remember, as you acquire more information about the theatre, the more likely you are going to create innovative solutions!
                </p>
                <br />


                <div className="tab-content" >
                    <CluesTableGameInstructions1 />

                    <br />

                    <CluesTable {...this.props} />

                    <br />

                    <CluesTableGameInstructions2 />
                </div>




                {/* For each communication patter create a chat */}
                <div style={chatHolder}>
                    {
                        teams.map((team, index) => {
                            return (
                                <ChatTeam key={"TeamConnect" + index} team={team} type="team" {...this.props} />
                            )
                        })
                    }
                </div>


                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />

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

