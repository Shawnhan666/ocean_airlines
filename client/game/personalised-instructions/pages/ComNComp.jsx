import React, { Component } from 'react'
import ComStructShape from '../../../general/communication-structure/ComStructShape'

// Functions to get information from the other players
import {
    returnOtherTeams, returnOthersAvatar,
    competitionWithOthers, areOthersCompeting
} from '../../../general/helper-functions/returnPlayerInformation'

// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'
import CompetitionIncentive from '../../../general/tips-n-messages/CompetitionIncentive';

// EXPLAIN THE COMPETITION RULES TO THE PLAYERS

export default class ComNComp extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C), as well as their initials and avatars
        const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player)
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player)

        const myTeam = player.get("team")

        // If there is no competition
        const isNoCompetition = !conditionForCompWithTeam1 && !conditionForCompWithTeam2
        const bothCompete = conditionForCompWithTeam1 && conditionForCompWithTeam2
        
        

        return isNoCompetition
            ? (
                <div className="com-n-comp">
                    <h3>Incentives</h3 >
                    <p>
                        Now you should know that your team, Team {myTeam} <img src={player.get("avatar")} className="avatar-medium-textaligned" />, is a relatively new team in the theater, and it is currently working very hard to establish its reputation in the whole company, and particularly to build credibility with the Managing Director.
                    </p>
                    <p>
                        To do that, the General Manger has made it clear that your team needs to take into account the other teams' unique perspective and information such that your proposal can have lasting changes to the whole theatre.
                    </p>
                    <p>
                        Hence, in the following discussion phase, remember that <strong><u>your team needs to acquire as many pieces of information from the other two teams as possible.</u></strong>
                    </p>

                    <br />
                    <div className="game-instructions">
                        <div>
                            <p>
                                To reflect this, <strong> for every piece of information your team acquires in the discussion, your team will be awarded 2 points</strong>  Additionally, your team’s business plan will be scored by two research experts on a scale of 1-7 and that score will be added to your final point tally.
                            </p>
                        </div>
                    </div>

                    <br />
                
                    <p>
                    Remember that to have the best chance at an innovative proposal, your team will need to gather as much information from the other two teams as possible. 
                    </p>

                    <br />

                    <br />
                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
                </div>
            )
            : (
                <div className="com-n-comp">
                    <h3>Incentives</h3 >
                    <p>
                    Now you should know that your <strong><u>team, Team {myTeam} <img src={player.get("avatar")} className="avatar-medium-textaligned" />, has a competitive relationship with Team {conditionForCompWithTeam1 ? otherTeam1: otherTeam2}{bothCompete && <> and Team {otherTeam2}</>}.</u></strong>
                    </p>
                    <p>
                        In the past, the Managing Director has organized similar special projects, and your team has had very intense competition with Team{conditionForCompWithTeam1 ? otherTeam1: otherTeam2}{bothCompete && <> and Team {otherTeam2} respectively</>}. Hence, in this special project, your team is very motivated to outperform them.
                    </p>
                    {
                        myTeam !== "Red"
                            ? <p> You should also know that Team Red <img src={team1Avatar} className="avatar-medium-textaligned" /> also has a similar competitive relationship with {otherTeam2} <img src={team2Avatar} className="avatar-medium-textaligned" /></p>
                            : <p></p>
                    }

                    <p>
                    These competitive relationships are illustrated below:
                    </p>
                    <div className="justify-center">
                        <ComStructShape showCompetition={true} {...this.props} />
                    </div>

                    <div className="game-instructions">
                        <div>
                            <p>
                                To reflect this, <strong><u>for every piece of information your team acquired more than Team {conditionForCompWithTeam1 ? otherTeam1: otherTeam2}{bothCompete && <> and Team {otherTeam2}</>}, your team will be awarded 3 points.</u></strong> 
                            </p>
                            <p>
                                For instance, if your team acquired 5 pieces of information whereas Team {conditionForCompWithTeam1 ? otherTeam1: otherTeam2} acquired 3 pieces {bothCompete && <> and Team {otherTeam2} acquired 2 pieces</>}, then your team will be awarded a total of {bothCompete ? "15" : "6"} points.
                            </p>
                            <p>
                                Additionally, your team’s business proposal will be scored by two research experts on a scale of 1-7 and that score will be added to your final point tally. 
                            </p>
                            <p style={{ marginBottom: "0px" }}>
                                At the end of the study, <strong><u>the top 3 scoring teams will be awarded $150 to be split between the two team members whereas the rest of the top 10 will be awarded $50. </u></strong>
                            </p>
                        </div>
                    </div>
                    <br />

                    

                    <br />

                    <div className="game-tip">
                        <p>
                        <strong><u>Game tip:</u></strong> Remember that to have the best chance at an innovative proposal, your team will need to gather as much information from the other two teams as possible. 
                        </p>
                    </div>
                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
                    
                </div >
            )
    }
}
