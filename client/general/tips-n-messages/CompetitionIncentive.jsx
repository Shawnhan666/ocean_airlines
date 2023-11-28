import React, { Component } from 'react'

// Functions to get information from the other players
import {
    returnOtherTeams, returnOthersAvatar,
    competitionWithOthers
} from '../helper-functions/returnPlayerInformation'

// Export a reminder message of who the player is competing with
export default class CompetitionIncentive extends Component {
    render() {
        const { player, game } = this.props;

        const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player)
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player)

        // If there is no competition
        const isNoCompetition = !conditionForCompWithTeam1 && !conditionForCompWithTeam2
        const bothCompete = conditionForCompWithTeam1 && conditionForCompWithTeam2

        return isNoCompetition
            ? (
                <div style={competitorStyle}>
                    <span>
                        <strong>INCENTIVE:</strong> You are trying to collect as much unique information as you can to come up with an innovative proposal
                    </span>

                </div>
            )
            : (
                <div style={competitorStyle}>
                    <span>
                        <strong>INCENTIVE:</strong> You are competing to collect more information than Team {conditionForCompWithTeam1 ? otherTeam1: otherTeam2}{conditionForCompWithTeam1 ? <img src={team1Avatar} className="avatar-medium-textaligned" />: <img src={team2Avatar} className="avatar-medium-textaligned" />}{bothCompete && <> and Team {otherTeam2} <img src={team2Avatar} className="avatar-medium-textaligned" /></>}
                    </span>
                </div>
            )
    }
}

const competitorStyle = {
    backgroundColor: "white"
    , color: "red"
    , border: "1px solid red"
    , borderRadius: "5px"
    , padding: "1.5rem"
    , textAlign: "center"
}