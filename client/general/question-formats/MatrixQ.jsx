import React, { Component } from 'react'

export default class MatrixQ extends Component {

    // When a radio button is changed
    handleChange = e => {
        // Get the radio button
        let radio = e.currentTarget;

        // Get the player and the index
        const { player, dbIndex } = this.props;

        // Get the answers of the player (if they are already assigned, i.e. did not return "undefined"), 
        // otherwise, set the answer to an empty object.
        let answers = player.get(dbIndex) ?? {};

        // If this radio button that was changed was checked 
        // (because two radio buttons change, the one checked and the one unchecked)
        if (radio.checked) {
            // Modify or create the value (the scale) of this radio button set to the name (the question) of this radio button
            answers[radio.name] = radio.value;
            // Set the answers object back to the player
            player.set(dbIndex, answers);
        }
    }

    render() {
        const { player, dbIndex, head, questions, responseScale } = this.props;

        let answers = player.get(dbIndex) ?? {};

        // Create a table where the header are the options of the scale, and the lines are
        // the questions with radio buttons for each option of the scale.
        return (
            <div>
                {head &&
                    <>
                        <p>{head}</p>
                        <br />
                    </>
                }

                <div className="matrix">
                    <table>
                        <thead>
                            <tr>
                                <th>Questions</th>
                                {responseScale.map((response, index) => <th key={index}>{response}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, questionIndex) => {
                                return (
                                    <tr key={questionIndex}>
                                        <td>{question}</td>
                                        {responseScale.map((response, responseIndex) => {
                                            return (
                                                <td className="matrix-input" key={responseIndex}>
                                                    <input
                                                        type="radio"
                                                        name={question}
                                                        value={response}
                                                        checked={answers[question] === response}
                                                        onChange={this.handleChange}
                                                    />
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
