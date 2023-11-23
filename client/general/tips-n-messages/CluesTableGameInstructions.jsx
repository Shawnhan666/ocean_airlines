import React, { Component } from 'react'

// Tips about how to use the clue table
export class CluesTableGameInstructions1 extends Component {
    render() {
        return (
            <div>
                <p>
                During the discussion, you will have this table with a reminder of your team’s unique information, and hints about the unique information from the other two teams. There is no need to work on it now. This is simply for demonstration. 
                </p>

                <div className="game-tip">
                    <div>
                        <p>
                            <strong><u>When your team acquires a new piece of information from another team, you should fill in the blank text box slot.</u></strong> This allows you to keep track of the information you collected AND it allows us to calculate your final scores!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export class CluesTableGameInstructions2 extends Component {
    render() {
        return (
            <div className="game-tip">
                <div>
                    <p style={{ marginBottom: "0px" }}>
                        <strong>Game tip:</strong>  these hints can help your team get started. Look at what type of unique clues other teams have and try to ask specific questions (“hi, what is the most profitable type of shows?”). You will need more than your own information to have a chance to come up with the most innovative plan.
                    </p>
                </div>
            </div>
        )
    }
}

