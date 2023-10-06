import React, { Component } from 'react'

export default class GeneralInformation extends Component {
    render() {
        return (
            <div className="game-information">
                <p>
                The theatre hosts both in-house productions and external shows on two stages: 
                </p>
                <ul>
                    <li>The main stage hosts shows requiring larger sets or casts (seating 1000). A smaller studio theatre (seating 70) hosts small shows on the second floor. There are bars that serve beverages, and a recently installed elevator for seniors or disabled audience members.</li>

                    <li>External shows are typically Broadway shows that the theater book by paying a certain fee. Internally produced shows are developed by the <em>Riverside Theatre’s</em> creative staff and cost less than external shows.</li>
                </ul>
                <p>
                    About last year's ticket sales:
                </p>
                <ul>
                    <li>Last year, 53% of group tickets were purchased by corporate groups, 14% by social clubs, 13% hospital staff, 8% by theater clubs, and 5% by charity groups.</li>

                    <li>Marketing research suggests several demographic groups have registered strong interests. These groups are 1) retirement community and senior clubs, and 2) schools, from kindergarten to high school.</li>
                </ul>
            </div>

        )
    }
}
