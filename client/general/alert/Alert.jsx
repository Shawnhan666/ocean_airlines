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
        const { stage, player } = this.props;
        let alertType = player.get("alertType");

        return (
            <div style={shadedPage}>
                <div style={alert}>
                    {alertType === "1 mins" ? 
                        <p style={{ textAlign: 'center' }}><strong>Just 1 minute left! Please create and SAVE two slogans before submitting.</strong></p> 
                        : 
                        <p style={{ textAlign: 'center' }}><strong>There are only 30 seconds left!</strong></p>}
                    {stage.name === "collaborate" && 
                        <p style={{ textAlign: 'center' }}><strong><u>Make sure to save your work!</u></strong></p>}
                    <div style={{ marginTop: '90px' }}> {/* 这里添加了额外的上边距 */}
                        <button onClick={this.closeAlert}>Ok</button>
                    </div>
                </div>
            </div>
        )
    }
}

//     render() {
//         const { stage, player } = this.props;
//         let alertType = player.get("alertType");

//         return (
//             <div style={shadedPage}>
//                 <div style={alert}>
//                     {alertType === "1 mins" ? 
//                         <p style={{ textAlign: 'center' }}><strong>Just 1 minute left! Please create and save two slogans before submitting.</strong></p> 
//                         : 
//                         <p style={{ textAlign: 'center' }}><strong>There are only 30 seconds left!</strong></p>}
//                     {stage.name === "collaborate" && 
//                         <p style={{ textAlign: 'center' }}><strong><u>Make sure to save your work!</u></strong></p>}
//                     <p className="button-holder" style={{ textAlign: 'center' }}>
//                         <button onClick={this.closeAlert}>Ok</button>
//                     </p>
//                 </div>
//             </div>
//         )
//     }
// }

//     render() {
//         const { stage, player } = this.props
//         let alertType = player.get("alertType")
//         return (
//             <div style={shadedPage}>
//                 <div style={alert}>
//                     {alertType === "1 mins" ? <p><strong>Just 1 minute left! Please create and save two slogans before submitting.</strong></p> : <p><strong>There are only 30 seconds left!</strong></p>}
//                     {stage.name === "collaborate" &&  <p><strong><u>Make sure to save your work!</u></strong></p>}
//                     <p className="button-holder"><button onClick={this.closeAlert}>Ok</button></p>
//                 </div>
//             </div >
//         )
//     }
// }

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
    , width: "500px"
    , height: "350px"
    , border: "1px solid black"
    , borderRadius: "1rem"
    , fontSize: "14px"  
    , lineHeight: "1.6"  
    , color: "#333"  

    , display: "flex"
    , flexDirection: "column"
    , justifyContent: "center"
    , alignItems: "center"
}