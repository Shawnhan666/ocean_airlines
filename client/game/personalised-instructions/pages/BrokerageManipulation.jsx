import React, { Component } from 'react'
import ComStructShape from '../../../general/communication-structure/ComStructShape'
import { ComStructInstructions1, ComStructInstructions2 } from '../../../general/communication-structure/ComStructInstructions'

// Functions to get information from the other players
import {
    returnOthersInitials, returnOthersAvatar,
    competitionWithOthers, areOthersCompeting
} from '../../../general/helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';
import CompetitionIncentive from '../../../general/tips-n-messages/CompetitionIncentive';

// EXPLAIN THE COMPETITION RULES TO THE PLAYERS

export default class BrokerageManipulation extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C), as well as their initials and avatars
        const [conditionForCompWithPlayer1, conditionForCompWithPlayer2] = competitionWithOthers(game, player)
        // const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)
        const [player1Initials, player2Initials] = returnOthersInitials(game, player)
        // const [otherTeam1, otherTeam2] = returnOtherTeam(game, player)
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player)
        const competitiveRelationship = "XXXXXX"
        const myTeam = player.get("team")

        // If there is no competition
        const isNoCompetition = !conditionForCompWithPlayer1 && !conditionForCompWithPlayer2
        const isBroker = myTeam === "Red"
        const communication = JSON.parse(game.treatment.communication)
        const isBrokerage = !communication.includes("BcG")
        console.log(isBrokerage)
    

        return (
                <div className="brokerage-manipulation">
                    <ComStructInstructions1 isBrokerage={isBrokerage} {...this.props}/>

                    <br />
                    <div className="justify-center">
                        <ComStructShape showCompetition={false} {...this.props} />
                    </div>
                    <br />
                    <div className="game-instructions">
                    <ComStructInstructions2 isBrokerage={isBrokerage} {...this.props}/>
                    </div>
                    <br />

                    <div className="game-tip">
                        <p>
                        <strong><u>Game tip: </u></strong>Remember that to have the best chance at an innovative proposal, your team will need to gather as much information from the other two teams as possible. 
                        </p>
                    </div>
                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
                </div>
            )
    }
}
