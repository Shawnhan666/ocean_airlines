import React, { Component } from 'react';

// Present the clues table and its instructions to the participant
import { CluesTableGameInstructions1, CluesTableGameInstructions2 } from '../../../general/tips-n-messages/CluesTableGameInstructions';
import CluesTable from '../../../general/information/CluesTable';
import ChatTeam from '../../discussion/chats/ChatTeam';
import Heading from '../ui/Heading';
import { returnTeammateInitials, returnOthersAvatar, competitionWithOthers, returnOtherTeams} from '../../../general/helper-functions/returnPlayerInformation';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import InformationLine from '../../../general/information-line/InformationLine';

export default class ClueHints extends Component {

    render() {
        const { game, player, pageDbIndex, min, round } = this.props;
        const teams = ["Red", "Blue", "Green"]
        const team = player.get("team")
        const teammateName = returnTeammateInitials(game, team, player)



        return (
            <div>
                <Heading {...this.props}/>
                <br />
                <h3>Teammate introduction and strategy</h3>
                <div className="game-instructions">
                    <p>
                    Please meet your teammate {teammateName} <img src={player.get("avatar")} className="avatar-medium-textaligned" /> with the chatbox below. We encourage you to introduce yourself and <strong><u>use the information table below to <em>strategize</em></u></strong> what information your team want to acquire from the other two teams. 
                    </p>
                </div>

                <br />
                <div style={chatHolder}>
                    {
                        teams.map((team, index) => {
                            return (
                                <ChatTeam key={"TeamConnect" + index} team={team} type="team" {...this.props} />
                            )
                        })
                    }
                </div>

                <br />

                <CluesTableGameInstructions1 />

                <br />

                <CluesTable {...this.props} />

                <br />


                <div className="game-tip">
                    <p>
                        <strong><u>Game Tip:</u></strong> these hints can help your team get started. Look at what type of unique clues other teams have and try to ask specific questions (“hi, what is the most profitable type of shows?”). You will need more than your own information to have a chance to come up with the most innovation plan. 

                    </p>
                </div>
                

            
                <br />

                {/* <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} /> */}

            </div>
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

