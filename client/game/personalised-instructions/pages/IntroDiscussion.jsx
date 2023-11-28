import React, { Component } from 'react';
// These are buttons that automatically deal with the changing of the page, and whether or not it should be disabled based on 
// whether the player answered all the questions (otherwise the next button will be disabled and there will be a red warning text)
import ChangePageButtons from '../../../general/buttons/ChangePageButtons';

// EXPLAIN THE DISCUSSION TO THE PARTICIPANTS

export default class IntroDiscussion extends Component {
    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { player, pageDbIndex, min, game } = this.props;

        const team = player.get("team")

        return (
            <div>
                <h3>Introducing the Discussion</h3>
                <p>
                    The Managing Director has made clear to the three teams that each team has done their independent research and therefore has a unique perspective and private information on how to improve the theatre.
                </p>
                <p>
                    Hence, the GM has organized an upcoming <strong><u>discussion phase where the three teams can discuss and exchange information.</u></strong>
                </p>

                <br />

                <div className="game-tip">
                    <strong><u>Game tip:</u></strong> The information you currently have is very limited to your own team. To create the most innovative solution, you will need to get as many pieces of information from the other two teams as possible. 
                </div>

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )

    }
}
