import React, { Component } from 'react'
import ComStructShape from './ComStructShape'

// Functions to get information from the other players
import {
    returnOtherTeams, returnOthersAvatar,
    competitionWithOthers, areOthersCompeting
} from '../helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../buttons/ChangePageButtons';
import CompetitionIncentive from '../tips-n-messages/CompetitionIncentive';

// EXPLAIN THE COMPETITION RULES TO THE PLAYERS

export class ComStructInstructions1 extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, game, isBrokerage} = this.props;

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C), as well as their initials and avatars
        const [conditionForCompWithPlayer1, conditionForCompWithPlayer2] = competitionWithOthers(game, player)
        // const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player)
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player)
        const myTeam = player.get("team")

        // If there is no competition
        const isNoCompetition = !conditionForCompWithPlayer1 && !conditionForCompWithPlayer2
        if (isBrokerage) {
            if (myTeam === "Red") {
                return (
                    <div className="com-struct-instructions">
                        <h3>Communication Structure</h3 >
                        <p>
                            The Managing Director has decided on a discussion coordinator and they happened to choose your team, Team Red <img src={player.get("avatar")}className="avatar-medium-textaligned" /> . 
                        </p>
                        <p>
                            Below is a graphic aid to help you visualize the communication structure. 
                        </p>
                    </div>
                    
                )
            } else {
                return (
                <div className="com-struct-instructions">
                    <h3>Communication Structure</h3 >
                    <p>
                        The Managing Director has decided on a discussion coordinator and they happened to choose Team Red <img src={team1Avatar}className="avatar-medium-textaligned" /> . 
                    </p>
                    <p>
                        Below is a graphic aid to help you visualize the communication structure. 
                    </p>
                </div>
                )
            }
        } else {
            return (
            <div className="com-struct-instructions">
                <h3>Communication Structure</h3 >
                <p>
                The Managing Director has decided on an open discussion format where all three teams can talk to one another.
                </p>
                <p>
                    Below is a graphic aid to help you visualize the communication structure. 
                </p>
            </div>
            )
        }
    }
}


export class ComStructInstructions2 extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, game, isBrokerage} = this.props;

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C), as well as their initials and avatars
        const [conditionForCompWithPlayer1, conditionForCompWithPlayer2] = competitionWithOthers(game, player)
        // const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)
        const otherTeams = returnOtherTeams(game, player)
        console.log(otherTeams)
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player)
        const otherTeam = otherTeams.filter(_team => _team !== "Red")
        const myTeam = player.get("team")
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player)

        // If there is no competition
        const isNoCompetition = !conditionForCompWithPlayer1 && !conditionForCompWithPlayer2
        if (isBrokerage) {
            if (myTeam === "Red") {
                return (
                    <div className="com-struct-instructions">
                        <p>
                            As this graph illustrates, your team <strong><u>is the “bridge” that connects the other two teams,</u></strong>  Team {otherTeam1} <img src={team1Avatar} className="avatar-medium-textaligned" />and Team {otherTeam2} <img src={team2Avatar} className="avatar-medium-textaligned" />.
                        </p>
                        <p>
                            Only your team can communicate directly with them, and they <strong>CANNOT </strong>communicate with each other without going through your team. 
                        </p>
                    </div>
                    
                )
            } else {
                return (
                <div className="com-struct-instructions">
                    <p>
                    As this graph illustrates, Team Red <img src={team1Avatar}className="avatar-medium-textaligned"/> <strong><u>is the “bridge” that connects your team with the other team.</u></strong> You can communicate directly with Team Red <img src={team1Avatar}className="avatar-medium-textaligned" />but not Team {otherTeam} <img src={team2Avatar} className="avatar-medium-textaligned" />. 
                    </p>
                    <p>
                    In other words, if you want to communicate with Team {otherTeam} <img src={team2Avatar} className="avatar-medium-textaligned" />, you will have to do so indirectly via Team Red <img src={team1Avatar} className="avatar-medium-textaligned" />. 
                    </p>
                </div>
                )
            }
        } else {
            return (
            <div className="com-struct-instructions">
                <p>
                    As this graph illustrates, every team will be connected with each other, and your team can freely communicate with the other two teams.
                </p>
            </div>
            )
        }
    }
}

