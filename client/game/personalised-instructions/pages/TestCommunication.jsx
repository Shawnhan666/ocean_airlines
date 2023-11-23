import React, { Component } from 'react';

// Functions to get information from the other players
import { returnOthersInitials, returnOthersAvatar, competitionWithOthers } from '../../../general/helper-functions/returnPlayerInformation'

// TEST WHETHER THEY UNDERSTOOD THE COMMUNICATION STRUCTURE

export default class TestCommunication extends Component {
    state = {
        communication1: ""
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
        const { communication1 } = this.state; // Get currently selected response

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C)
        const myTeam = player.get("team");
        const isBroker = myTeam === "Red";
        const communication = JSON.parse(game.treatment.communication)
        const isBrokerage = !communication.includes("BcG")
        


        // Based on the competition conditions, determine what is the correct answer for this player
        const correctAnswer = isBroker && isBrokerage ? "bridge"
            : !isBroker && isBrokerage ? "oneOtherTeam"
                : "closure"


        // Check whether the currently selected response corresponds to the correct answer
        if (communication1 === correctAnswer) {
            // Get how many times they have tried this question (if not assigned, assign to 0)
            let understanding = player.get("understanding-incentive") ?? 0;
            // And set it to the player without modification
            player.set("understanding-incentive", understanding);
            // Navigate to the next page
            this.next();
        } else if (communication1 === "") {
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
        const { communication1 } = this.state;
        

        return (
            <div>
                <div className="quiz">
                    <h3>Recap about the Communication Structure</h3>
                    <p>
                        Please recall the information you have just read and answer the following question. You can navigate back to reread the instructions if you need.
                    </p>
                    <div>
                        <p>Please select the statement that best describes your team’s communication structure:</p>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="communication1"
                                value="closure"
                                checked={communication1 === "closure"}
                                onChange={this.handleChange}
                            />
                            <span>Every team can talk to every other team: the three teams are completely connected</span>
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="communication1"
                                value="oneOtherTeam"
                                checked={communication1 === "oneOtherTeam"}
                                onChange={this.handleChange}
                            />
                            <span>Not every team can talk to every other team: my team can only directly communicate with one other team</span>
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="communication1"
                                value="bridge"
                                checked={communication1 === "bridge"}
                                onChange={this.handleChange}
                            />
                            <span>The other two teams can only communicate through my team as a “bridge”</span>
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
