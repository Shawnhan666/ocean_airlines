import React from 'react'

// Dev wrapper based on code from Empirica. This will only show in development mode (but not in production).
// Two buttons will appear at the top of the app and allow you to reset a player or create a new player
export default function DevWrapper({
    children,
    showOpenAltPlayer,
    onOpenAltPlayer,
    showReset,
    onReset, }) {

    const isDev = showReset || showOpenAltPlayer

    return (
        <div>
            {isDev &&
                <div style={{
                    display: "flex"
                    , justifyContent: "flex-end"
                    , alignItems: "center"
                    , margin: "5px"
                }}>
                    <p style={{
                        fontSize: "1rem"
                        , color: "grey"
                        , margin: "0"
                    }}>Dev buttons:</p>
                    {showReset &&
                        <button style={devButtons} onClick={onReset}>Reset Player</button>
                    }
                    {showOpenAltPlayer &&
                        <button style={devButtons} onClick={onOpenAltPlayer}>New Player</button>
                    }

                </div>
            }

            { children}
        </div >
    )
}

// Styling
const devButtons = {
    backgroundColor: "transparent"
    , fontSize: "1rem"
    , color: "grey"
    , margin: "0 2.5px"
    , cursor: "pointer"
}