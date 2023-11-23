import React, { Component } from 'react'
// The tabs
import Header from './header/Header'
// The contents of the tabs
import Content from './content/Content'

export default class Tabs extends Component {

    // Which tab is open or not, with the cluesTable open by default
    state = {
        tabsStatus: {
            cluesTable: true,
            competitionStructure: false,
            sharedInfo: false,
            earlySub: false
        },

        collabStatus: {
            cluesTable: true,
            sharedInfo: false,

        }
    }

    // Update the status of the tabs based on the tab that is clicked
    updateStatus = name => {

        // Get every possible tab
        const { stage } = this.props

        let tabsStatus = null
        if (stage.name === "discussion") {
            tabsStatus = this.state.tabsStatus;
        } else {
            tabsStatus = this.state.collabStatus;
        }

        let tabs = Object.keys(tabsStatus);
        console.log(stage.name)
        console.log(tabs)

        // For each tab, set the one clicked to the opposite of what it was
        // Open if closed, closed if open
        // And set the others to closed
        tabs.forEach(tab => {
            if (tab === name) {
                tabsStatus[tab] = !tabsStatus[tab];
            } else {
                tabsStatus[tab] = false
            }
        })

        // Set these statuses back to the component state
        this.setState({ tabsStatus: tabsStatus });
    }

    render() {
        // Provide the statuses down to the elements of the tabs
        const { tabsStatus, collabStatus} = this.state;
        const { stage } = this.props
        
        
        return stage.name === "discussion" 
        ? (
            <div>
                <Header tabsStatus={tabsStatus} updateStatus={this.updateStatus} stage={stage}/>
                <Content tabsStatus={tabsStatus} {...this.props} />
            </div>
        )
        : (
            <div>
                <Header tabsStatus={collabStatus} updateStatus={this.updateStatus} stage={stage}/>
                <Content tabsStatus={collabStatus} {...this.props} />
            </div>
        )
    }
}
