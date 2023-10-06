import React, { Component } from 'react'
import PlayersInformation from '../../../general/information/PlayersInformation';
import { returnOtherTeams } from '../../../general/helper-functions/returnPlayerInformation';
// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// SHOW THE POLICE CLUES TO THE PLAYER

export default class UniqueInformation extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, round, game } = this.props;
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player);

        return (
            <div>
                <h3>Unique Information</h3>

                <p>
                    <strong><u>Note that Team {otherTeam1} and Team {otherTeam2} have conducted independent research and therefore have completely different sets of information. They have their own unique perspectives and information on what the theater needs to improve.  </u></strong> Please read through them carefully, but there is no need to write them down – they will be available later when needed.
                </p>

                <PlayersInformation player={player} round={round} game={game} />
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
