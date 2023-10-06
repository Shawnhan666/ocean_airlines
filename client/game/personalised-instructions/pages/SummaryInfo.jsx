import React, { Component } from 'react';
import GeneralInformation from '../../../general/information/GeneralInformation';
import UniqueInformation from '../../../general/information/PlayersInformation';

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import PlayersInformation from '../../../general/information/PlayersInformation';
import { returnTeammateInitials } from '../../../general/helper-functions/returnPlayerInformation';

// SHOW PARTICIPANT ALL THE CLUES THEY HAVE ACCESS TO

export default class SummaryInfo extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, round, game } = this.props;
        const team = player.get("team")
        const teammateName = returnTeammateInitials(game, team, player)

        return (
            <div>
                <h3>Summary of the shared and unique information</h3>
                <p>Below is a presentation of all the information available to your team. This information will be available during the discussion phase.</p>

                <h4>Shared information (available to all three teams)</h4>
                <GeneralInformation />
                <h4>Private information (unique to your team)</h4>
                <UniqueInformation player={player} round={round} game={game} />

                <br />
                <p>
                Next we will enter the discussion phase to connect your team to the other two teams. 
                </p>
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
