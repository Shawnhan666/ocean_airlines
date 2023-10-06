import { deepCopy } from './deepCopy'; // import deep copy function

// Get the clues for this player
export const getMyClues = (round, player) => {

    // Get the clue ids assigned to this player (done based on type in the server/main.js)
    let playerClues = player.get("myClues")
    // Deep copy the clues from the round and return the clues that have the ids that correspond to that player
    let clues = deepCopy(round.get("clues")).filter(clue => playerClues.includes(clue.id))

    return clues;
}

// Get the clues for a certain type/position
export const getPlayerClues = (round, game, team) => {

    // Get this player from the list of players in the game based on its type
    let player = game.players.filter(player => player.get("team") === team)[0]
    // Get the clue ids assigned to this player (done based on type in the server/main.js)
    let playerClues = player.get("myClues")
    // Deep copy the clues from the round and return the clues that have the ids that correspond to that player
    let clues = deepCopy(round.get("clues")).filter(clue => playerClues.includes(clue.id))

    return clues;
}

// Get all the clues
export const getAllClues = (round) => {

    // Deep copy the clues from the round and return them
    let clues = deepCopy(round.get("clues"))

    return clues;
}