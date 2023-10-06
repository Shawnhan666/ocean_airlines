import React, { Component } from 'react';

// Functions to get information from the other players
import { returnOtherTeams, returnOthersAvatar, competitionWithOthers } from '../../../general/helper-functions/returnPlayerInformation'

// TEST WHETHER THEY UNDERSTOOD THE COMPETITION INCENTIVES

export default class Quiz extends Component {
    state = {
        answer: ""
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
        const radio = e.currentTarget;
        this.setState({ answer: radio.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { player, game } = this.props;
        const { answer } = this.state; // Get currently selected response

        // Check whether the currently selected response corresponds to the correct answer
        if (answer === "right") {
            // Get how many times they have tried this question (if not assigned, assign to 0)
            let understanding = player.get("understanding-intro") ?? 0;
            // And set it to the player without modification
            player.set("understanding-intro", understanding);
            // Navigate to the next page
            this.next();
        } else if (answer === "") {
            // If they didn't select an answer, launch an alert
            alert("Please select an answer")
        } else {
            // If the answer is incorrect, alert them
            alert("Incorrect: The correct answer is that you will have shared information that is available to all three teams AND unique information that is unique to your team. Please answer again.");
            // Get how many times they have tried this question (if not assigned, assign to 0)
            let understanding = player.get("understanding-intro") ?? 0;
            // Increment this and set it to the player
            understanding++
            player.set("understanding-intro", understanding);
        }
    };

    render() {
        const { player, game } = this.props;
        const { answer } = this.state;


        return (
            <div>
                <div className="quiz">
                    <h3>Just to make sure we are on the same page...</h3>
                    <div>
                        <p>
                            What type of clues will be available to your team?
                        </p>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="comprehensionCheck1"
                                value="wrong1"
                                checked={answer === "wrong1"}
                                onChange={this.handleChange}
                            />
                            <span>Public, shared information that all three teams in this study can access</span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="comprehensionCheck1"
                                value="wrong2"
                                checked={answer === "wrong2"}
                                onChange={this.handleChange}
                            />
                            <span>Private, unique information that are unique to my team</span>
                            <br />
                        </div>

                        <div className="radio-list">
                            <input
                                type="radio"
                                name="comprehensionCheck1"
                                value="right"
                                checked={answer === "right"}
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
