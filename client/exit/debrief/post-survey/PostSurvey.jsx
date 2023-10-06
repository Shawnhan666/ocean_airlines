import React, { Component } from "react"
import { Centered } from "meteor/empirica:core"

//Importing UI
import PostHeader from "./ui/PostHeader" // Just repeats some information the players about how this is the exit survey
import PostPages from "./ui/PostPages" // Where the pages are handled

// This is the post survey. It is a component that has multiple pages in it across which players can naviguate.
// Otherwise players cannot navigate back and forth between exit steps.

export default class PostSurvey extends Component {
  static stepName = "PostSurvey"

  // Have the min and max pages.
  // The pageDbIndex is the name underwhich the player has the number of the page they are currently at.
  // You would get it with player.get(pageDbIndex)
  state = {
    min: 1,
    max: 9,
    pageDbIndex: "exitPage",
  }

  render() {
    const { pageDbIndex, min, max } = this.state

    return (
      <Centered>
        <PostHeader />
        <PostPages
          pageDbIndex={pageDbIndex}
          min={min}
          max={max}
          {...this.props}
        />
      </Centered>
    )
  }
}
