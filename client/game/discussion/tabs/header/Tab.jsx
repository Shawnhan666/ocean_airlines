import React, { Component } from 'react'

// Tab component with it's name, the text to show, and whether the arrow is up or down based on whether it is open or not
export default class Tab extends Component {
    render() {
        const { status, name, text, updateStatus } = this.props;

        return (
            <div className="tab" onClick={() => updateStatus(name)}>
                {text}{" "}{status ? <span>&and;</span> : <span>&or;</span>}
            </div>
        )
    }
}
