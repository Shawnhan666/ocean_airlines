import React, { Component } from 'react';

// Allows you to sync time with the server
import { TimeSync } from "meteor/mizzao:timesync";

// Functions to get information from the other players
import { returnPlayerInitials, returnPlayerAvatar } from '../../../general/helper-functions/returnPlayerInformation';

// Get component for a message
import Message from './Message';

// Get component for notification that the other player is a competitor
import Competitor from '../../../general/tips-n-messages/Competitor';

export default class Chat extends Component {

    // Construct a state with:
    // - current text being written in chat
    // - number of messages in this chat
    // - whether a new message has been received and this should be notified
    // - whether the user has just sent a message
    constructor() {
        super();
        this.state = {
            text: "",
            nbOfMessages: 0,
            newMessages: false,
            justSentMessage: false,
        };

        // Create a ref to the chat, so that you can scroll it to the bottom when new messages arrive
        this.heightRef = React.createRef();
    }

    // Prepare a notification sound for new messages
    notificationSound = new Audio("sounds/notification.mp3")

    // Function that will scroll to the bottom of the chat
    scrollToBottom = () => {
        this.heightRef.current.scrollTop = this.heightRef.current.scrollHeight; // make the scroll top the current scroll height (i.e., make it go to the bottom)
    };

    // Function to update the number of messages in the state
    updateNbMessage = () => {
        this.setState({ nbOfMessages: this.getNbMessage() })
    }

    // When the chat is created, call scroll to bottom and update number of messages
    componentDidMount() {
        this.scrollToBottom()
        this.updateNbMessage()
    }

    // When the chat is update because something changes to its states and props...
    componentDidUpdate() {
        const { nbOfMessages, justSentMessage } = this.state;

        // If the current number of message isn't equal to the actual number of messages (i.e., there are new messages)
        if (nbOfMessages !== this.getNbMessage()) {

            // If the player hasn't just sent a message...
            if (!justSentMessage) {
                // It means they got a new messages
                this.setState({ newMessages: true });

                // If they are involve in this chat, play the notification for the new message
                if (this.getIsInvolved()) {
                    this.notificationSound.play();
                }
            }

            // Set that they no longer just sent a new message
            this.setState({ justSentMessage: false });

            // Call scroll to bottom and update number of messages
            this.scrollToBottom()
            this.updateNbMessage()
        }
    }

    // Function that gets the number of messages in this chat
    // Every message un the round that has the communication pattern of this chat (e.g., "AcB")
    getNbMessage = () => {
        const { round, communicationPattern } = this.props

        return round.get("messages").filter(message => {
            return message.chat === communicationPattern;
        }).length;
    };

    // Function that resets the new messages (to take the notification away when users interact with the chat)
    sawMessages = () => {
        this.setState({ newMessages: false });
    }

    // Check whether this player is in this chat and whether they can see it, hear it, interact with it
    getIsInvolved = () => {
        const { player, communicationPattern, type, team } = this.props;

        // get player team

        const myTeam = player.get("team")
        let tag = null
        if (myTeam === "Red") {
            tag = "R"
        } else if (myTeam === "Blue") {
            tag = "B"
        } else {
            tag = "G"
        }

        const myRole = player.get("role")
        // get array of player teams in this communication pattern (e.g., "AcB" => ["A", "B"]) 
        const communicators = communicationPattern.split("c")
        
        // return (communicators.includes(myTeam) & myRole === "Liason")

        return (communicators.includes(tag))

    }

    getCanWrite = () => {
        const { player } = this.props;

        const myRole = player.get("role")

        return (myRole === "Liason")
    }

    // Update the text of the text input in this chat
    changeText = (e) => {
        this.setState({ text: e.currentTarget.value });
    };

    // Get a new message id for a new message
    getNewMessageID = () => {

        //Get highest message id
        let highestId = 0;
        this.props.round.get("messages").forEach((message) => {
            //If the message id is higher than the highestId...
            if (message.id > highestId) {
                //... set this message id as the new highestId
                highestId = message.id;
            }
        })

        //Increment it to make the new id
        highestId++
        return highestId;
    }

    // Submit a new message
    submitMessage = (e) => {
        //Prevent default
        e.preventDefault();

        const { player, communicationPattern, round } = this.props

        // Populate the message object with who, what, when, which chat, and which id
        let newMessage = {
            text: this.state.text,
            sender: player._id,
            senderType: player.get("team"),
            chat: communicationPattern,
            createdAt: new Date(TimeSync.serverTime(null, 1000)),
            id: this.getNewMessageID()
        };

        // Copy the messages with this new message added and set it to the round
        let currentMessages = round.get("messages");
        let newMessages = [...currentMessages, newMessage];
        round.set("messages", newMessages);

        // Reset the text
        this.setState({ text: "" });

        // Note that this player just sent a message
        this.setState({ justSentMessage: true });
    }

    render() {
        const { round, game, player, communicationPattern } = this.props;

        // Get whether the player is involved in this chat
        const isInvolved = this.getIsInvolved()
        const isLiason = this.getCanWrite()

        // get player team
        const myTeam = player.get("team")
        // get array of player team in this communication pattern (e.g., "AcB" => ["A", "B"]) 
        const communicators = communicationPattern.split("c")
        // Get the team of the other player in the communication pattern
        let otherTeam = communicators.filter(communicator => { return communicator !== myTeam[0] })[0]
        if (otherTeam === "R") {
            otherTeam = "Red"
        } else if (otherTeam === "B") {
            otherTeam = "Blue"
        } else {
            otherTeam = "Green"
        }


        // Check whether there is a competition patter that mirrors this communication pattern (e.g., "AcB" and "AvB" )
        const competitors = JSON.parse(game.treatment.competition)
            .filter(competitionPattern => { return competitionPattern.replace("v", "c") === communicationPattern })

        // Only render the chat if the player is involved
        return (
            <div style={isInvolved ? { margin: "2.5px", width: "495px" } : { display: "none" }}>

                <div style={chatHeaderHolder}>
                    <span style={chatHeaderInfo}>
                        {`Chat with Team ${otherTeam}`}
                        <img src={returnPlayerAvatar(game, otherTeam)} className="avatar-small" />
                        {competitors.length !== 0 && <Competitor />}
                    </span>

                    {this.state.newMessages && <span className="header-notification">New Messages!</span>}
                </div>

                <div style={chatBox} ref={this.heightRef}>
                    {round.get("messages").filter(message => {
                        return message.chat === communicationPattern;
                    }).map((message) => (
                        <Message key={message.id} message={[message]} player={player} game={game} />
                    ))}
                </div>

                {isLiason ? 
                <div style={inputHolder}>
                    <form onSubmit={this.submitMessage}>
                        <input
                            style={messageInput}
                            type="text"
                            name="text"
                            placeholder="Type your message..."
                            onChange={this.changeText}
                            value={this.state.text}
                            autoComplete="off"
                            onClick={this.sawMessages}
                        />
                        <input type="submit" value="Send" className="messageSubmit" disabled={this.state.text === ""} />
                    </form>
                </div>
                :
                <div style={chatWarning}>
                    <p>Your teammate is representing your team in this chat. You can observe the conversation and discuss with your teammate.</p>
                </div>
                }
            </div>
        )
    }
}

// Style variables
const chatBox = {
    padding: "30px",
    height: "400px",
    width: "100%",
    overflowY: "scroll",
    borderWidth: "1.5px",
    borderStyle: "solid",
};

const chatHeaderHolder = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    margin: "0px",
    backgroundColor: "#394B59",
    height: "80px",
    width: "100%",
}

const chatHeaderInfo = {
    display: "flex",
    alignItems: "center",
    color: "white",
};

const inputHolder = {
    width: "100%"
};

const messageInput = {
    width: "85%",
    margin: "0px",
    height: "50px",
};

const chatWarning = {
    width: "100%",
    backgroundColor: "#f5e3d4",
    border: "solid",
    color: "#251406",
};

