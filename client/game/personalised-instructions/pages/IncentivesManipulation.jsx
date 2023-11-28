import React, { Component } from 'react'
import ComStructShape from '../../../general/communication-structure/ComStructShape'
import { IncentiveInstructions1, IncentiveInstructions2 } from '../../../general/communication-structure/IncentiveInstructions'


// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons'

// EXPLAIN THE COMPETITION RULES TO THE PLAYERS

export default class IncentivesManipulation extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        const myTeam = player.get("team")
        
        


        return (
            <div className="brokerage-manipulation">
                <IncentiveInstructions1 {...this.props}/>

                <br />
                <div className="justify-center">
                    <ComStructShape showCompetition={true} {...this.props} />
                </div>
                <br />
                <IncentiveInstructions2 {...this.props}/>
                <br />
                

                <div className="game-tip">
                        <strong><u>Game tip:</u></strong> look at your team’s position on the communication diagram, and think about how your team might use its position to gain information. For example, try not to just ask for information, but also <strong><u>consider “trading” information</u></strong> with others. If another team is reluctant to send information, <strong><u>consider “making deals”</u></strong> with them by offering something in exchange.
                </div>
                
                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}