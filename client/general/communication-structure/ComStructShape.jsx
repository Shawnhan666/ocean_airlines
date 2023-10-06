import React, { Component } from 'react';

// Functions to get information from the other players
import { returnPlayerInitials, returnPlayerAvatar } from '../helper-functions/returnPlayerInformation'

export default class ComStructShape extends Component {
    render() {
        const { game, player, showCompetition = true } = this.props
        // By default you want to show competition

        // Get the player type and prepare what the structure will look like depending on the player's type
        const myTeam = player.get("team")
        const structureProperties = {
            playerA: {
                initials: myTeam === "Red" ? "Your Team" : "Team Red",
                avatar: returnPlayerAvatar(game, "Red"),
            },
            playerB: {
                initials: myTeam === "Blue" ? "Your Team" : "Team Blue",
                avatar: returnPlayerAvatar(game, "Blue"),
            },
            playerC: {
                initials: myTeam === "Green" ? "Your Team" : "Team Green",
                avatar: returnPlayerAvatar(game, "Green"),
            }
        };

        // Get the communication and competition arrays
        const communication = JSON.parse(game.treatment.communication)
        const competition = JSON.parse(game.treatment.competition)
        
        // testing
        // const communication = ["RcB", "RcG"]
        // const competition = ["RvB", "RvG", "BvG"]

        // Create an SVG with 3 notes and edges between them
        // If there is competition add red lines with the word "competition"
        return (
            <div>
                <svg width="450" height="200">

                    {/* Node Player A */}
                    <circle cx="200" cy="55" r="5" fill="black" />
                    <text x="195" y="45" fill="black" textAnchor="middle" style={{ fontSize: "14pt" }}>{structureProperties.playerA.initials}</text>
                    <image x="185" y="0" href={structureProperties.playerA.avatar} height="30" width="30" />
                    {/* Node Player B */}
                    <circle cx="105" cy="150" r="5" fill="black" />
                    <text x="52.5" y="155" fill="black" textAnchor="middle" style={{ fontSize: "14pt" }}>{structureProperties.playerB.initials}</text>
                    <image x="45" y="165" href={structureProperties.playerB.avatar} height="30" width="30" />
                    {/* Node Player C */}
                    <circle cx="305" cy="150" r="5" fill="black" />
                    <text x="365" y="155" fill="black" textAnchor="middle" style={{ fontSize: "14pt" }}>{structureProperties.playerC.initials}</text>
                    <image x="365" y="165" href={structureProperties.playerC.avatar} height="30" width="30" />

                    {/* Link A and B */}
                    {communication.includes("RcB") &&
                        <line x1="200" y1="55" x2="105" y2="150" stroke="black" />
                    }
                    {/* Link A and C */}
                    {communication.includes("RcG") &&
                        <line x1="200" y1="55" x2="305" y2="150" stroke="black" />
                    }
                    {/* Link B and C */}
                    {communication.includes("BcG") &&
                        <line x1="105" y1="150" x2="305" y2="150" stroke="black" />
                    }

                    {showCompetition && <CompetitionLinks myTeam={myTeam} competition={competition} />}

                </svg>

            </div >
        )
    }
}

// Component that makes the competition links
class CompetitionLinks extends Component {
    render() {
        const { myType, competition } = this.props

        return (
            <>
                {/* Competition between Red and Blue */}
                {competition.includes("RvB") &&
                    <>
                        <polyline points="195,55 190,55 105,140 105,145" style={{ fill: "none", stroke: "red" }} />
                        <text x="90" y="85" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
                    </>
                }
                {/* Competition between Red and Green */}
                {competition.includes("RvG") &&
                    <>
                        <polyline points="205,55 210,55 305,140 305,145" style={{ fill: "none", stroke: "red" }} />
                        <text x="290" y="85" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
                    </>
                }
                {/* Competition between Blue and Green */}
                {competition.includes("BvG") &&
                    <>
                        <polyline points="107.5,153.5 115,158.5 295,158.5 302.5,153.5" style={{ fill: "none", stroke: "red" }} />
                        <text x="180" y="180" fill="red" textAnchor="middle" style={{ fontSize: "12pt" }}>Competition</text>
                    </>
                }
            </>
        )
    }
}

