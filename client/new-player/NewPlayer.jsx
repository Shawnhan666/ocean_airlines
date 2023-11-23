import React, { Component } from 'react';
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';

// This is an important component that creates a new player. 
// You shouldn't change the logic or functions on this page, just the text and details

export default class NewPlayer extends Component {
    state = { id: "" };

    // Update the id being written
    handleUpdate = event => {
        const { value, name } = event.currentTarget;
        this.setState({ [name]: value });
    };

    // Submit the id with handleNewPlayer
    handleSubmit = event => {
        event.preventDefault();

        const { handleNewPlayer } = this.props;
        const { id } = this.state;
        handleNewPlayer(id);
    };

    render() {
        const { id } = this.state;

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Identification</h1>

                            <p>
                                Please enter your Prolific ID:
                        </p>

                            <input
                                dir="auto"
                                type="text"
                                name="id"
                                id="id"
                                value={id}
                                onChange={this.handleUpdate}
                                placeholder=""
                                required
                                autoComplete="off"
                            />

                            <br />

                            <p className="button-holder">
                                <button type="submit">Submit</button>
                            </p>

                        </form>
                    </div>
                </Centered>
            </DevWrapper>
        )
    }
}
