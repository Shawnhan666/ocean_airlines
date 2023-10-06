// Importing Empirica
import Empirica from "meteor/empirica:core"
import "./bots.js"
import "./callbacks.js"
// Importing clues
// Importing avatar paths
import { avatarPaths } from "./avatars/avatarPaths"
// Importing helper functions for randomness
import { choice, popChoice, shuffle } from "./helper-functions/random"
import { clues } from "./clues/clues.js"

/*-----------
- gameInit: -
-----------*/

// Setting a variable for whether this is development/testing or not (determines the time set to the stages)
const isTest = false

// Running the gameInit
Empirica.gameInit((game) => {
  // Prepare elements for players to randomly draw an avatar:
  const avatarShapes = ["first", "second", "third"]
  const avatarColors = ["red", "blue", "green"]

  // Setting up the players
  game.players.forEach((player, i) => {
    let avatarIdx = i
    // Giving individual clues to the players (No counterbalancing)

    // Getting the avatar
    let shape = avatarShapes[avatarIdx]
    let color = avatarColors[avatarIdx]
    let avatar = avatarPaths[shape][color]
    player.set("avatar", avatar)

    // Set chat messages
    player.set("chat1", [])
    player.set("chat2", [])

    // Set early submission:
    player.set("isEarlySubmission", false)
    player.set("earlySubmissionTime", 0)

    // Add navigation pages:
    player.set("personalisedDiscussionPage", 1)
    player.set("exitPage", 1)

    // Set alert type
    player.set("alertType", "2 mins")
  })

  /*----------------------------------
	- Setting up the round and stages: -
	----------------------------------*/

  // Setting up the round
  // Set the clues, but also the timing for the discussion and early submission (text, and when players can start early submitting)
  const round = game.addRound({
    data: {
      messages: [],
      discussionTime: "12",
      earlySubTimeText: "5",
      earlySubTimeNum: 900,
    },
  })

  round.addStage({
    name: "personalised_instructions",
    displayName: "Instructions",
    durationInSeconds: isTest ? 60 : 180,
  })

  round.addStage({
    name: "interaction_1",
    displayName: "Collaborate",
    durationInSeconds: isTest ? 135 : 3000,
  })

  round.addStage({
    name: "self_report",
    displayName: "Self Report",
    durationInSeconds: isTest ? 135 : 120,
  })

  round.addStage({
    name: "feedback",
    displayName: "Feedback",
    durationInSeconds: isTest ? 135 : 120,
  })

  round.addStage({
    name: "interaction_2",
    displayName: "Collaborate",
    durationInSeconds: isTest ? 135 : 300,
  })
})
