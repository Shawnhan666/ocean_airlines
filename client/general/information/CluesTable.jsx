import React, { Component } from 'react'

// Functions to get clues
import { getPlayerClues } from '../helper-functions/getClues'

// Functions to get information from the other players
import { returnPlayerInitials, returnPlayerAvatar } from '../helper-functions/returnPlayerInformation'

// Little message that tells you that a player is your competitor
import Competitor from '../tips-n-messages/Competitor'

export default class CluesTable extends Component {
    render() {
        const { player } = this.props

        // Get the player team and reorder the three possible positions with that player's team as the first one
        const team = player.get("team")
        let positions = ["Red", "Blue", "Green"]
        positions.splice(positions.indexOf(team), 1)
        positions.unshift(team)

        // For each position create a PlayerTable
        return (
            <div className="tables-holder">
                {positions.map((position, index) => {
                    return <PlayerTable key={index} position={position} {...this.props} />
                })}
            </div>
        )
    }
}

class PlayerTable extends Component {

    // Handle when a player writes in one of the text boxes
    handleChange = e => {
        const { player, stage } = this.props

        // Get the text and the clues id
        const text = e.currentTarget.value
        const clueId = e.currentTarget.name

        // Get the player's clues answered, which is already partially set in the server/main.js
        let cluesAnswered = player.get("clues-answered")
        // Replace the text for this clue id
        cluesAnswered[clueId] = text
        // Set to the player
        player.set("clues-answered", cluesAnswered)
    }

    render() {
        const { position, game, round, player } = this.props;

        // Get the clues for the player in this position (team)
        const clues = getPlayerClues(round, game, position)
        // Get the player's clues answered, which is already partially set in the server/main.js
        const cluesAnswered = player.get("clues-answered")

        // If the player team is the same as the position, this means this is the player's table
        // The textboxes will be prefilled and disabled
        // If will say that it is your clues instead of showing a player profile
        const team = player.get("team")
        const currentPlayer = team === position

        return (
            <div className="table-of-clues">
                <div className="clues-header">
                    {<PlayerProfile position={position} team={team} {...this.props} />}
                </div>

                {clues.map((clue, index) => {
                    // Get the answer for this clue id
                    const answer = cluesAnswered[clue.id] ?? ""
                    // Calculate the number of rows based on the number of characters in the answer so that
                    // the text area will grow automatically
                    const size = answer !== "" ? Math.round((answer.length / 50) + 1) : 1
                    return (
                        <div key={index} className="clues-row">
                            <p className="justify-center">{clue.question}</p>
                            <div className="justify-center">
                                <textarea
                                    name={clue.id}
                                    width="100%"
                                    rows={size}
                                    value={answer}
                                    disabled={currentPlayer}
                                    autoComplete="off"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

// A component to show a player profile as Initials Avatar Competitor
class PlayerProfile extends Component {
    render() {
        const { game, team, position } = this.props

        // Check if there is competition between this player and the player in that position (e.g., "AvB")
        const competition = JSON.parse(game.treatment.competition)
        const isCompetitor = competition.includes(team[0] + "v" + position) || competition.includes(position + "v" + team[0])
        const currentPlayer = team === position

        return (
            <>
                Unique information from Team {position} <img className="avatar-small" src={returnPlayerAvatar(game, position)}/>
                <br />
                {isCompetitor && <Competitor />}
            </>
        )
    }
}
