import React, { Component } from 'react'
import InformationLine from '../../../general/information-line/InformationLine';

// Functions to get information from the other players
import { returnTeammateInitials, returnOthersAvatar, competitionWithOthers, returnOtherTeams} from '../../../general/helper-functions/returnPlayerInformation';
import CompetitionIncentive from '../../../general/tips-n-messages/CompetitionIncentive';

export default class DiscussionInstructionsPage extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    // Go to the previous page
    previous = () => {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage--;
        player.set(pageDbIndex, currentPage);
    }

    // Finish the stage
    next = () => {
        const { player, pageDbIndex, max } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage++;

        if (currentPage > max) {
            player.stage.submit();
        } else {
            player.set(pageDbIndex, currentPage);
        }
    }

    render() {
        const { player, round, game } = this.props;

       
        const team = player.get("team")
        const communication = JSON.parse(game.treatment.communication)
        const numChats = communication.filter(communicationPattern => {
            return communicationPattern.split("c").includes(team[0])
        }).length
        // Text for the 'next' button (it is set here because it is use both on the button and in the little instructions box)
        const buttonText = "Click to set ready for the discussion";

        // How long the discussion will last, set in the round
        const discussionTime = round.get("discussionTime")

        // Get player 1 (A or B) and player 2 (B or C) initials and avatars
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player);
        const isRepresentitive = player.get("role") === "Liason"
        const teammateName = returnTeammateInitials(game, team, player)
        const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player)
        const bothCompete = conditionForCompWithTeam1 && conditionForCompWithTeam2
        const noCompetition = !conditionForCompWithTeam1 && !conditionForCompWithTeam2



        return (
            <div>
                <h3>Instructions about the Discussion</h3>

                <p><strong>In the next phase, your team will be discussing with the other two teams. Below we present how you will be communicating with your teammate, and the other teams. </strong></p>
                
                <div className="game-instructions">
                    <p>
                        Keep in mind you have a teammate <strong><u>{teammateName}</u></strong> <img src={player.get("avatar")} className="avatar-medium-textaligned" />. During the discussion, you will have a chat box with them so that your team can communicate internally. 
                    </p>

                    <p>
                        <strong><u>The Managing Director has selected {isRepresentitive ? "you" : `your teammate ${teammateName}`} {isRepresentitive ? "": <img src={player.get("avatar")} className="avatar-medium-textaligned" />  } {isRepresentitive ? "" : "has"} to represent your team, Team {player.get("team")} <img src={player.get("avatar")} className="avatar-medium-textaligned" /> in the discussion phase.</u></strong>
                        {isRepresentitive && ` Hence, you will have ${numChats} more chat boxes to communicate with ${team === "Red" ? "the other two teams." : " Team Red."} `}
                    </p>
                    {!isRepresentitive && 
                    <p>
                        Hence, {teammateName} <img src={player.get("avatar")} className="avatar-medium-textaligned" />  will communicate with the other teams on the team’s behalf. Because they have more than one chat to manage, please work with them patiently to gather information from the other teams.
                    </p>
                    }
                </div>
                
                <br />
                
                <p>
                In the next 3 minutes, you will first be connected to your teammate, {teammateName} <img src={player.get("avatar")} className="avatar-medium-textaligned" />, where you can introduce yourself and familiarize yourself with the information you want to acquire from other teams.  
                </p>
                
                <p className="button-holder">
                    <button type="button" onClick={this.previous}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={this.next} disabled={player.stage.submitted}>
                        {this.props.player.stage.submitted ? "Waiting for the others..." : buttonText}
                    </button>
                </p>

                {/* Show this message once the player has submitted, this is to explain to them why they are waiting for the others */}
                {player.stage.submitted &&
                    <>
                        <br />
                        <div className="game-instructions">
                            <div>
                                <strong>Note:</strong> The next stage will only start once all players have finished reading the instructions and have clicked the ‘{buttonText}’ button. You can see whether players have clicked the button by looking at the "Player Status" below: the cross next to their avatar (i.e., their chess piece) will have changed to a checkmark.
                            </div>
                        </div>
                    </>
                }


                <br />
                <InformationLine {...this.props} />
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

