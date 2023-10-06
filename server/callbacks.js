import Empirica from "meteor/empirica:core";


// onGameStart is triggered opnce per game before the game starts, and before
// the first onRoundStart. It receives the game and list of all the players in
// the game.
Empirica.onGameStart(game => { });

// onRoundStart is triggered before each round starts, and before onStageStart.
// It receives the same options as onGameStart, and the round that is starting.
Empirica.onRoundStart((game, round) => { });

// onStageStart is triggered before each stage starts.
// It receives the same options as onRoundStart, and the stage that is starting.
Empirica.onStageStart((game, round, stage) => { });

// onStageEnd is triggered after each stage.
// It receives the same options as onRoundEnd, and the stage that just ended.
Empirica.onStageEnd((game, round, stage) => {

  // Reset the clues table if they filled any in during the instructions
  if (stage.name == "team_connect")
    game.players.forEach(player => {
    let clueIds = [0,1,2,3,4,5,6,7,8,9,10,11]
    let myClues = player.get("myClues")
    let otherClueIds = clueIds.filter( id => !myClues.includes(id))
    let cluesAnswered = player.get("clues-answered")
    otherClueIds.forEach(clueId => cluesAnswered[clueId] = "")
		player.set("clues-answered", cluesAnswered)
    
    let team = player.get("team")
    let messages = round.get("messages").filter(message => message.chat === team)
    player.set(`chat${team}`, messages)

    player.round.set("alert", false)


  })

    
  // For each player record all the messages
  if (stage.name == "discussion")
    game.players.forEach(player => {

      let team = player.get("team")
      let messagesTeam = round.get("messages").filter(message => message.chat === team)

      
      let messagesAB = round.get("messages").filter(message => message.chat === "RcB")
      let messagesAC = round.get("messages").filter(message => message.chat === "RcG")
      let messagesBC = round.get("messages").filter(message => message.chat === "BcG")
      
      player.set(`chat${team}`, messagesTeam)
      player.set("chatRB", messagesAB)
      player.set("chatRG", messagesAC)
      player.set("chatBG", messagesBC)
      
      player.round.set("alert", false)
      
    })

    if (stage.name == "collaborate")
      game.players.forEach(player => {
      
      let team = player.get("team")
      let messages = round.get("messages").filter(message => message.chat === team)
      player.set(`chat${team}`, messages)

  })
});

// onRoundEnd is triggered after each round.
// It receives the same options as onGameEnd, and the round that just ended.
Empirica.onRoundEnd((game, round) => { });

// onGameEnd is triggered when the game ends.
// It receives the same options as onGameStart.
Empirica.onGameEnd(game => { });