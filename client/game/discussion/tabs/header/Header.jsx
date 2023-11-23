import React, { Component } from 'react';
import Tab from './Tab';

// A header of the tabs with all the tabs
export default class Header extends Component {
    render() {
        const { tabsStatus, updateStatus, stage } = this.props;


        return stage.name === "discussion"
        ? (
            <div className="header-tab-holder">
                <Tab status={tabsStatus.cluesTable} name={"cluesTable"} text={"Information Table"} updateStatus={updateStatus} />
                <Tab status={tabsStatus.competitionStructure} name={"competitionStructure"} text={"Team Relations"} updateStatus={updateStatus} />
                <Tab status={tabsStatus.shared} name={"sharedInfo"} text={"Shared Information"} updateStatus={updateStatus} />
                <Tab status={tabsStatus.earlySub} name={"earlySub"} text={"Early submission"} updateStatus={updateStatus} />
            </div>
        )
        : (
            <div className="header-tab-holder">
                <Tab status={tabsStatus.cluesTable} name={"cluesTable"} text={"Information Table"} updateStatus={updateStatus} />
                <Tab status={tabsStatus.shared} name={"sharedInfo"} text={"Shared Information"} updateStatus={updateStatus} />
            </div>
        )
    }
}
