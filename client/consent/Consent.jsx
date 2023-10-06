import React from "react";
import { Centered, ConsentButton } from "meteor/empirica:core";
import { isMobile, isChrome, isSafari, isFirefox } from 'react-device-detect';
import DevWrapper from "../general/dev-wrapper/DevWrapper";

export default class Consent extends React.Component {
	render() {
		// Only return the consent form with the posibility of continuing if people log in with a computer and one of these browsers
		return !isMobile && (isChrome || isSafari || isFirefox) ?
			(
				<DevWrapper {...this.props}>
					<Centered>
						<div>
							<h2 style={{ textAlign: "center" }}>Consent to Participate</h2>
							<h3>Project Title</h3>
							<p>
								Understanding decision making
         			 		</p>

							<h3>Purpose of the Study</h3>
							<p>
								This research is being conducted by Dr. Thomas Taiyi Yan and Dr. Vijaya Ventakaramani, at the University of Maryland, College Park. We are inviting you to participate in this study because you are at least 18 years old and an undergraduate enrolled in a business class at the University of Maryland. The purpose of this research project is to better understand decision making.
          					</p>

							<h3>Procedures</h3>
							<p>
								The procedures will take less than 30 minutes, in which you will be asked to play as a private detective solving a case, along with two other private detectives who are also played by students in the behavioral lab. You will read about a “murder mystery”, then discuss with the other two players, and indicate your final verdict. Upon completion, you will receive 2% of your course credit.
          					</p>

							<h3>Potential Risks and Discomforts</h3>
							<p>
								There are no known risks and discomfort associated with participating in this research study.
          					</p>

							<h3>Potential Benefits</h3>
							<p>
								There are no direct benefits to you by participating in this research. Some potential benefits include learning more about research, and about the various topics in this particular session. We hope that, in the future, other people might benefit from this study through improved understanding of workplace interactions.
          					</p>

							<h3>Confidentiality</h3>
							<p>
								Any potential loss of confidentiality will be minimized by being stored in password protected computers and all records being made anonymous. Only researchers will have access to the data. The confidentiality of the subjects participating in the experiments will be maintained.  To maintain subject confidentiality, the electronic datasets generated during the studies will be stored in a password-protected network directory accessible only to investigators.
          					</p>

							<p>
								Data will be stored for a period of five years after all journal articles based on the data have been published, then the data will be destroyed by deletion. Subjects’ names will not be associated with the data collected at any time, so it will be impossible to identify the responses of individual subjects. The data collected will be associated only with randomly assigned subject ID numbers that cannot be used to identify individual subjects. The data will be analyzed by experimental condition rather than by individual subject.
						 	 </p>

							<p>
								If we write a report or article about this research project, your identity will be protected to the maximum extent possible. Your information may be shared with representatives of the University College London, University of Maryland, College Park or governmental authorities if you or someone else is in danger or if we are required to do so by law.
						  	</p>

							<h3>Compensation</h3>
							<p>
								Upon completion, you will receive course credit completion. In addition, if you perform well in the game, you may earn up to $20 in Amazon Gift Card.
          					</p>

							<h3>Right to Withdraw and Questions</h3>
							<p>
								Your participation in this research is completely voluntary.  You may choose not to take part at all.  If you decide to participate in this research, you may stop participating at any time.  If you decide not to participate in this study or if you stop participating at any time, you will not be penalized or lose any benefits to which you otherwise qualify. Your standing or grades at the university will not be affected by choosing or not choosing to participate in your study.
          					</p>

							<p>
								If you decide to stop taking part in the study, if you have questions, concerns, or complaints, or if you need to report an injury related to the research, please contact the investigator:
						  	</p>

							<p style={{ textAlign: "center" }}>
								Taiyi Yan <br />
								3330 Van Munching Hall, R.H. Smith School of Business <br />
								tomyan@umd.edu <br />
							</p>

							<h3>Participant Rights</h3>
							<p>
								If you have questions about your rights as a research participant or wish to report a research-related injury, please contact:
          					</p>

							<p style={{ textAlign: "center" }}>
								University of Maryland College Park <br />
								Institutional Review Board Office <br />
								1204 Marie Mount Hall <br />
								College Park, Maryland, 20742 <br />
								E-mail: irb@umd.edu <br />
								Telephone: 301-405-0678 <br />
							</p>
							<br />
							<p>
								For more information regarding participant rights, please visit:
							</p>
							<p>
								<a href="https://research.umd.edu/irb-research-participants" target="_blank">https://research.umd.edu/irb-research-participants</a>
							</p>
							<p>
								This research has been reviewed according to the University of Maryland, College Park IRB procedures for research involving human subjects.
							</p>

							<TechnicalNote />

							<h3>Statement of Consent</h3>
							<p>
								By clicking "I consent" below, you agree that you are at least 18 years of age, have read the consent form, and voluntarily agree to participate in the study. You may print a copy of this page for your own reference.
						  	</p>

							<br />
							<ConsentButton text="I CONSENT" />
						</div>
					</Centered>
				</DevWrapper>
			) :
			(
				<DevWrapper {...this.props}>
					<Centered>
						<div>
							<TechnicalNote />
						</div>
					</Centered>
				</DevWrapper>
			);
	}
}

// Component that shows the technical note to players explaining that they must be on a computer and be using one of these browsers
class TechnicalNote extends React.Component {
	render() {
		return (
			<div>
				<h3>Technical Note</h3>
				<p>
					This study cannot run on mobile/tablets nor on browsers other than Chrome, Firefox, or Safari. Please make sure you are using a <strong>computer</strong> and that you are using <strong>Chrome, Firefox, or Safari</strong>.
				</p>
			</div>
		)
	}
}