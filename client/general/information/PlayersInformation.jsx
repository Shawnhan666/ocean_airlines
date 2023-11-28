import React, { Component } from 'react';
import { getMyClues } from '../helper-functions/getClues'; // Functions to get clues

// Component that gets the player's clues and maps through them
export default class PlayersInformation extends Component {
    render() {
        const { round, player } = this.props;
        const clues = getMyClues(round, player);

        return (
            <div className="game-information">
                <ol>
                    {clues.map(clue => <li key={clue.id}>{clue.clue}</li>)}
                </ol>
            </div>
        )
    }
}
