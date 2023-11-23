import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';
import GeneralInformation from '../general/information/GeneralInformation';
import ChangePageButtons from '../general/buttons/ChangePageButtons';


// Background for the case
export default class SharedInfo extends Component {
    render() {
        const { hasPrev, hasNext, onNext, onPrev, min, pageDbIndex, player} = this.props;

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div className="instructions">
                        <h2>Shared Information</h2>
                        <p>
                            Please note that the other two teams also have this information. Please read through them carefully, but there is no need to write them down – they will be available later.
                        </p>

                        <br />

                        <GeneralInformation />

                        <br />

                        <p>
                            Next, we will connect you with your teammate and show you the <strong>information that is UNIQUE to your team.</strong> Please allow up to one min to connect with the other participants.
                        </p>
                    </div>

                    <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />

                </Centered>
            </DevWrapper>
        )
    }
}
