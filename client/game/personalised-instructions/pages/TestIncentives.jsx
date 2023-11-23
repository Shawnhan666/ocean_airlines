import React, { Component } from 'react';

// Functions to get information from the other players
import { returnOtherTeams, returnOthersAvatar, competitionWithOthers } from '../../../general/helper-functions/returnPlayerInformation'

// TEST WHETHER THEY UNDERSTOOD THE COMPETITION INCENTIVES

export default class TestIncentives extends Component {
    state = {
        incentives1: ""
    };

    // Scroll to the top when this component starts
    componentDidMount() {
        this.props.scrollToTop();
    }

    // Navigate to the previous page
    previous = () => {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage--;
        player.set(pageDbIndex, currentPage);
    }

    // Navigate to the next page
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

    // Update the current response selected
    handleChange = e => {
        const element = e.currentTarget;
        this.setState({ [element.name]: element.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { player, game } = this.props;
        const { incentives1 } = this.state; // Get currently selected response

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C)
        //const [conditionForCompWithPlayer1, conditionForCompWithPlayer2] = competitionWithOthers(game, player)
        const [conditionForCompWithTeam1, conditionForCompWithTeam2] = competitionWithOthers(game, player)

        // Based on the competition conditions, determine what is the correct answer for this player
        const correctAnswer = conditionForCompWithTeam1 && conditionForCompWithTeam2 ? "both"
            : conditionForCompWithTeam1 ? "otherTeam1"
                : conditionForCompWithTeam2 ? "otherTeam2"
                    : "none"

        // Check whether the currently selected response corresponds to the correct answer
        if (incentives1 === correctAnswer) {
            // Get how many times they have tried this question (if not assigned, assign to 0)
            let understanding = player.get("understanding-incentive") ?? 0;
            // And set it to the player without modification
            player.set("understanding-incentive", understanding);
            // Navigate to the next page
            this.next();
        } else if (incentives1 === "") {
            // If they didn't select an answer, launch an alert
            alert("Please select an answer")
        } else {
            // If the answer is incorrect, alert them
            alert("Incorrect: You need to answer the recap question correctly before you can continue. Please try again.");
            // Get how many times they have tried this question (if not assigned, assign to 0)
            let understanding = player.get("understanding-incentive") ?? 0;
            // Increment this and set it to the player
            understanding++
            player.set("understanding-incentive", understanding);
        }
    };

    render() {
        const { player, game } = this.props;
        const { incentives1 } = this.state;

        // Get player 1 (A or B) and player 2 (B or C) initials and avatars
        //const [player1Initials, player2Initials] = returnOthersInitials(game, player);
        const [otherTeam1, otherTeam2] = returnOtherTeams(game, player);

        //const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player);
        const [team1Avatar, team2Avatar] = returnOthersAvatar(game, player);

        return (
            <div>
                <div className="quiz">
                    <h3>Recap about the Incentives</h3>
                    <p>
                        Please recall the information you have just read and answer the following question. You can navigate back to reread the instructions if you need.
                    </p>
                    <br />
                    <div>
                        <p>In this game, my team is in direct competition with:</p>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="none"
                                checked={incentives1 === "none"}
                                onChange={this.handleChange}
                            />
                            <span>No one</span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="otherTeam1"
                                checked={incentives1 === "otherTeam1"}
                                onChange={this.handleChange}
                            />
                            <span>Team {otherTeam1} <img src={team1Avatar} className="avatar-medium-textaligned" /></span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="otherTeam2"
                                checked={incentives1 === "otherTeam2"}
                                onChange={this.handleChange}
                            />
                            <span>Team {otherTeam2} <img src={team2Avatar} className="avatar-medium-textaligned" /></span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="incentives1"
                                value="both"
                                checked={incentives1 === "both"}
                                onChange={this.handleChange}
                            />
                            <span>Both</span>
                            <br />
                        </div>

                    </div>

                    <p className="button-holder">
                        <button type="button" onClick={this.previous}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={this.handleSubmit}>
                            Submit Answer
                        </button>
                    </p>
                </div>
            </div >
        )
    }
}
