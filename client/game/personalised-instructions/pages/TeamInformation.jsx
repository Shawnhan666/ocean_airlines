import React, { Component } from 'react'

// Functions to get information from the other players
import { returnOtherTeams, returnTeammateInitials, returnOthersAvatar} from '../../../general/helper-functions/returnPlayerInformation'
import PlayersInformation from '../../../general/information/PlayersInformation';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)

import ChangePageButtons from "../../../general/buttons/ChangePageButtons.jsx"

// INFORM PARTICIPANTS ABOUT HOW THE INSTRUCTION STAGE WORKS

export default class TeamInformation extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { round, player, pageDbIndex, min, game } = this.props;

        // Get player 1 (A or B) and player 2 (B or C) initials and avatars
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player);
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player);
        const myTeam = player.get('team')
        const teammateName = returnTeammateInitials(game, myTeam, player)

        return (
            <div>
                <h3>Unique information</h3>
                <div className="game-instructions">
                    <p>
                        In addition to shared information about the theatre, your team Team {myTeam} <img src={player.get("avatar")} className="avatar-medium-textaligned" /> has conducted your own research, producing 4 pieces of <strong>UNIQUE</strong> information that are only accessible to your team. 
                    </p>

                    <p>
                        Please read through them carefully, but there is no need to write them down – they will be available later.
                    </p>
                </div>

                <br />
                <PlayersInformation player={player} round={round} game={game} />
                <br />

                <p> 
                    Note that Team {otherTeam1} <img src={team1Avatar} className="avatar-medium-textaligned" />  and Team {otherTeam2} <img src={team2Avatar} className="avatar-medium-textaligned" />  have conducted independent research and therefore have completely different sets of information. They have their own unique perspectives and information on what the theater needs to improve.  
                </p>

                

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}