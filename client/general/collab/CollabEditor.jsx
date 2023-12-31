import React, { Component } from "react"
import { returnPlayerInitials } from "../helper-functions/returnPlayerInformation"
import "./Editor.css"
import { StageTimeWrapper } from "meteor/empirica:core"

class timer extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
    }
  }

  changeText = (string) => {
    this.setState({ text: string })
  }

  componentDidMount() {
    //// Initialize Firebase.
    //// TODO: replace with your Firebase project configuration.

    const { game, player, editorKey, number, round, stage, remainingSeconds } =
      this.props

    console.log(`editor key = ${editorKey}`)

    var config = {
      apiKey: "AIzaSyBfWYClPO5xdzmjR-349n79XXNCgQz5yWs",
      databaseURL: "https://collab-empirica-default-rtdb.firebaseio.com",
    }
    // window.firebase.initializeApp(config);
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(config)
    } else {
      window.firebase.app() // if already initialized, use that one
    }

    // let chatReference = `${editorKey}`
    let chatReference = `empirica/${game._id}/${editorKey}`

    
    //// Get Firebase Database reference.
    var firepadRef = window.firebase.database().ref(chatReference) //this.getExampleRef(); //wthis.getkeyRef();
    //// Create CodeMirror (with lineWrapping on).
    var codeMirror = window.CodeMirror(
      document.getElementById(`firepad-container${number}`),
      { lineWrapping: true }
    )
    //// Create Firepad (with rich text toolbar and shortcuts enabled).
    var firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror, {
      richTextToolbar: false,
      richTextShortcuts: false,
    })
    //// Initialize contents.
    firepad.on("ready", function () {
              firepad.setHtml(
                '<span style="font-size: 24px;" style="color: gray">This is the collaborative editor, please write your slogan here... </span>'
        )
    })

    let collabText = ""

    firepad.on("synced", () => {
      let currentText = firepad.getText()
      this.setState({ text: currentText })
    })
    

  }

  // Helper to get hash from end of URL or generate a random one.
  getExampleRef() {
    var ref = window.firebase.database().ref()
    var hash = window.location.hash.replace(/#/g, "")
    if (hash) {
      ref = ref.child(hash)
    } else {
      ref = ref.push() // generate unique location.
      window.location = window.location + "#" + ref.key // add it as a hash to the URL.
    }
    return ref
  }

  getkeyRef() {
    const { player, type, editorKey } = this.props

    var ref = window.firebase.database().ref()
    ref = ref.child(editorKey)
    return ref
  }
  
  saveText = () => {
    const { round, editorKey, number } = this.props;
    let firepadContainer = document.getElementById(`firepad-container${number}`);
    let eleText = firepadContainer.querySelector(".CodeMirror-code").innerText;

    // 直接使用 Firepad 当前内容
    round.set(`${editorKey}`, eleText);
  }
  

  render() {
    const { remainingSeconds, round, number, editorKey } = this.props
    // if (remainingSeconds < 550) {
    //   // console.log(this.text)
    //   round.set(`collabText${key}`, this.text)
    // }

    return (
      <div>
        <div id={`firepad-container${number}`}></div>

        <div className="save-button-holder">
          <button onClick={this.saveText}>
            Please click this to save your slogan!!
          </button>
        </div>
      </div>

      // <div style={isInvolved ? { margin: "2.5px", width: "495px" } : { display: "none" }}>
      //   <div id="firepad-container"></div>
      // </div>
    )
  }
}

export default CollabEditor = StageTimeWrapper(timer)
