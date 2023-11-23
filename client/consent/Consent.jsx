import React from "react"
import { Centered, ConsentButton } from "meteor/empirica:core"
import { isMobile, isChrome, isSafari, isFirefox } from "react-device-detect"
import DevWrapper from "../general/dev-wrapper/DevWrapper"

export default class Consent extends React.Component {
  render() {
    // Only return the consent form with the posibility of continuing if people log in with a computer and one of these browsers
    return !isMobile && (isChrome || isSafari || isFirefox) ? (
      <DevWrapper {...this.props}>
        <Centered>
          <div>
            <h2 style={{ textAlign: "center" }}>Informed Consent</h2>
            <p>
              UCL Research Ethics Committee Approval ID Number: UCLSOM-2023-039
            </p>

            <p>
              You are invited to participate in a research study investigating
              various aspects of creativity in collaborative environments.
            </p>
            <p>
              <strong>Study Characteristics:</strong> The study will take
              approximately twenty minutes to complete. During this time, you
              will be asked to undertake an activity while working with other
              participants; followed by a series of short questionnaires which
              you will be asked to fill on your own.{" "}
            </p>
            <p>
              <strong>Participant’s Rights:</strong> Participation in this study
              is completely voluntary, meaning you are free to decline giving
              consent to participate or, if you consent to take part, then you
              can withdraw your consent at any point during or after the study.{" "}
            </p>
            <p>
              <strong>General Risks:</strong> We do not anticipate any risks
              involved in your study participation that are any different to the
              ones encountered on daily basis. However, you are free to stop
              your participation at any point if you wish to for any reasons and
              without experiencing any repercussions or losing any existing
              benefits granted to you by your initial participation agreement.
              Moreover, you are encouraged to contact the Primary investigator
              (PI) with any questions or concerns about the study. The PI’s
              details are displayed at the bottom of the page for ease of
              access.{" "}
            </p>
            <p>
              <strong>Data-related Risks:</strong> All your responses are
              anonymous. The researchers will not collect any identifiable
              information with the exception of your Prolific ID. This will be
              held securely until your data and your participation compensation
              are processed. Only the researchers involved in this study will
              have access to this information during this period of time. Once
              your payment has been processed, all Prolific IDs will be securely
              deleted. If you wish to withdraw your consent to use your data
              past this point, please share your study username which you will
              be asked to create if you consent to taking part in the study.
            </p>
            <p>
              <strong>Compensation:</strong> There is a $4 reward for your
              participation as well as a $10 performance-based bonus.
            </p>
            <p>
              <strong>Other Benefits:</strong> There are no other direct
              benefits to you other than getting a greater insight into the
              research process. It is our hope that you will find the activity
              interesting and that the results emerging from this study will
              contribute to an academically recognized body of knowledge.{" "}
            </p>

            <p>
              For questions, concerns or more information regarding this
              research you may contact the PI, Tom Taiyi Yan, at
              tom.yan@ucl.ac.uk. If you have questions or concerns about your
              rights as a research participant, or if you would like to make a
              complaint, you may contact the UCL ethics board at
              ethics@ucl.ac.uk.{" "}
            </p>

            <br />
            <ConsentButton text="I CONSENT" />
          </div>
        </Centered>
      </DevWrapper>
    ) : (
      <DevWrapper {...this.props}>
        <Centered>
          <div>
            <TechnicalNote />
          </div>
        </Centered>
      </DevWrapper>
    )
  }
}

// Component that shows the technical note to players explaining that they must be on a computer and be using one of these browsers
class TechnicalNote extends React.Component {
  render() {
    return (
      <div>
        <h3>Technical Note</h3>
        <p>
          This study cannot run on mobile/tablets nor on browsers other than
          Chrome, Firefox, or Safari. Please make sure you are using a{" "}
          <strong>computer</strong> and that you are using{" "}
          <strong>Chrome, Firefox, or Safari</strong>.
        </p>
      </div>
    )
  }
}
