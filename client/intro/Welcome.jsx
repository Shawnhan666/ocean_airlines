import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';


// General introduction to the game
export default class Welcome extends Component {
    state = {
        pledge1: "",
        pledge2: "",
    };

    handleChange = e => {
        const { value, name } = e.currentTarget;
        this.setState({ [name]: value });
    };

    // When the user submits their initials...
    handleSubmit = e => {
        const {onNext} = this.props;
        // Prevent default behaviour
        e.preventDefault();

        // Get the entered initials
        const { pledge1, pledge2 } = this.state

        // Check that this is 4 characters...
        if (pledge1.length === 0 | pledge2.length === 0) {
            // ...If not, alert the user that this is wrong and they need to try again
            alert("If you agree to both statements, please sign your initials in both text boxes to continue...");
        } else {
            // ...If correct, set the players initials and end this stage for them
            this.props.player.set("pledge1", pledge1);
            this.props.player.set("pledge2", pledge2);
            onNext();
        }
    };
    
    render() {
        const { hasNext, onNext, player } = this.props;
        const { pledge1, pledge2 } = this.state

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div className="game-instructions">
                        <h1>Welcome to our study!</h1>
                        <p>
                            This research is a <strong><u>60-min, multiplayer study in which you will collaborate with other players through real-time chat functions.</u></strong>
                        </p>

                        <p> 
                            If you become disengaged, other players cannot proceed alone and the researchers cannot use the data.
                        </p>

                        <p>
                            As such, <strong><u>it is essential for the study to have your attention for the next hour.</u></strong>
                        </p>
                    </div>

                    <br />

                    <div className="game-competition">
                        <p>
                            <strong>If you cannot commit to being fully engaged for the next 60 minutes, please exit now and enter the code EXIT in Prolific and we will process a payment of $0.10 for your time.</strong>
                        </p>
                        <p>
                            <strong><u>This will have no negative effect on your Prolific rating</u></strong>
                        </p>
                    </div>

                    <br />

                    <p>
                        <strong>If you want to participate in our study, please enter your initials next to the following statements:</strong>
                    </p>
                    
                    <br />
                    
                    <div className="pledge-holder">
                        <label htmlFor="pledge1">
                        I understand that this study will take around 50-60 mins.
                        </label>
                        <input
                            name="pledge1"
                            type="text"
                            placeholder=""
                            value={pledge1}
                            onChange={this.handleChange}
                            autoComplete="off"
                            autoFocus
                            required
                            style={{ width: "50px" }}
                        />
                    </div>

                    <div className="pledge-holder">
                        <label htmlFor="pledge2">
                        I understand that this is a multiplayer study, and I will be working interactively with other players.
                        </label>
                        <br />
                        <input
                            name="pledge2"
                            type="text"
                            placeholder=""
                            value={pledge2}
                            onChange={this.handleChange}
                            autoComplete="off"
                            autoFocus
                            required
                            style={{ width: "50px" }}
                        />
                    </div>

                    

                    {/* Empirica introduction buttons */}
                    <p className="button-holder">
                        <button type="button" onClick={this.handleSubmit}>
                            Continue to study
                    </button>
                    </p>
                </Centered>
            </DevWrapper>
        )
    }
}
