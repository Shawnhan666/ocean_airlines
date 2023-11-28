import React, { Component } from 'react'

// Custom alert message that shows up in the middle and hides the rest of the page.
// Tells participants that they are almost out of time.
// This is prettier and more relable than browser alerts that participatns might not see and will block the components from updating
export default class Alert extends Component {
    closeAlert = e => {
        const { player } = this.props;
        player.round.set("alert", false)
    }

    render() {
        const { stage, player } = this.props
        let alertType = player.get("alertType")
        return (
            <div style={shadedPage}>
                <div style={alert}>
                    {alertType === "2 mins" ? <p><strong>There are only two minutes left!</strong></p> : <p><strong>There are only 30 seconds left!</strong></p>}
                    {stage.name === "collaborate" &&  <p><strong><u>Make sure to save your work!</u></strong></p>}
                    <p className="button-holder"><button onClick={this.closeAlert}>Ok</button></p>
                </div>
            </div >
        )
    }
}

// Style variables
const shadedPage = {
    position: "absolute"
    , backgroundColor: "rgb(255, 255, 255, 0.7)"
    , zIndex: "1"
    , width: "100%"
    , height: "100%"

    , display: "flex"
    , justifyContent: "center"
    , alignItems: "center"
}

const alert = {
    backgroundColor: "rgb(250, 250, 250)"
    , width: "400px"
    , height: "250px"
    , border: "1px solid black"
    , borderRadius: "1rem"

    , display: "flex"
    , flexDirection: "column"
    , justifyContent: "center"
    , alignItems: "center"
}