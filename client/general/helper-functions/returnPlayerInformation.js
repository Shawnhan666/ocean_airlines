/* --------------------------------------------------------------
-                     Return Player Initials                    -
--------------------------------------------------------------- */

// Return initials for one team of player
export const returnPlayerInitials = (game, team) => {

    // Get the player that has this team
    // Then get the initials for this player
    let initials = game.players.filter(_player => {
        return _player.get("team") === team
    }).map(_player => {
        return _player.get("initials")
    })

    return initials;
}

// Return initials for players other than this player
export const returnOthersInitials = (game, player) => {

    // Get the teams of the players other that this player
    let teams = ["Red", "Blue", "Green"];
    teams.splice(teams.indexOf(player.get("team")), 1);

    // Get the initials for the other two players
    const initials1 = returnPlayerInitials(game, teams[0]);
    const initials2 = returnPlayerInitials(game, teams[1]);

    // Return them in an array to be destructured
    return ([initials1, initials2])
}

// Return initials for players other than this player
export const returnTeammateInitials = (game, team, player) => {

    // Get the player that has this team
    // Then get the initials for this player
    let initials = game.players.filter(_player => {
        return _player.get("team") === team
    }).filter(_player =>  {
        return _player.get("initials") !== player.get("initials")
    }).map(_player => {
        return _player.get("initials")
    })

    return initials;
}

/* --------------------------------------------------------------
-                     Return Team Info                    -
--------------------------------------------------------------- */

// Return initials for players other than this player
export const returnOtherTeams = (game, player) => {

    // Get the teams of the players other that this player
    let teams = ["Red", "Blue", "Green"];
    teams.splice(teams.indexOf(player.get("team")), 1);

    // Get the initials for the other two players
    const team1 = teams[0]
    const team2 = teams[1]

    // Return them in an array to be destructured
    return ([team1, team2])
}

/* --------------------------------------------------------------
-                      Return Player Avatar                     -
--------------------------------------------------------------- */

// Return avatar path for one team of player
export const returnPlayerAvatar = (game, team) => {

    // Get the player that has this team
    // Then get the initials for this player
    let avatar = game.players.filter(_player => {
        if (_player.get("role") === "Liason") {
            return _player.get("team") === team
        }
    }).map(_player => {
        return _player.get("avatar")
    })

    return avatar;
}

// Return avatar path for players other than this player
export const returnOthersAvatar = (game, player) => {

    // Get the teams of the players other that this player
    let teams = ["Red", "Blue", "Green"];
    teams.splice(teams.indexOf(player.get("team")), 1);

    // Get the initials for the other two players
    const avatar1 = returnPlayerAvatar(game, teams[0]);
    const avatar2 = returnPlayerAvatar(game, teams[1]);

    // Return them in an array to be destructured
    return ([avatar1, avatar2])
}

/* --------------------------------------------------------------
-                       Return Competition                      -
--------------------------------------------------------------- */

// Return whether a player is in competition with player 1 (A or B) and player 2 (B or C)
export const competitionWithOthers = (game, player) => {
    // Get player team
    const team = player.get("team")

    // Get teams of players other than this player
    let teams = ["Red", "Blue", "Green"]
    teams.splice(teams.indexOf(team), 1)

    // test if the there is a competition pattern with this player and player 1 (e.g., "AvB")
    const conditionForCompWithTeam1 = JSON.parse(game.treatment.competition).filter(condition => {
        return condition.split("v").includes(team[0]) && condition.split("v").includes(teams[0][0])
    }).length === 1

    // test if the there is a competition pattern with this player and player 2 (e.g., "AvC")
    const conditionForCompWithTeam2 = JSON.parse(game.treatment.competition).filter(condition => {
        return condition.split("v").includes(team[0]) && condition.split("v").includes(teams[1][0])
    }).length === 1

    // Return them in an array to be destructured
    return ([conditionForCompWithTeam1, conditionForCompWithTeam2])
}

// Return whether the other two players are competing between them
export const areOthersCompeting = (game, player) => {
    // Get player team
    const team = player.get("team")

    // Get teams of players other than this player
    let teams = ["Red", "Blue", "Green"]
    teams.splice(teams.indexOf(team), 1)

    // test if the there is a competition pattern with the other two players (e.g., "BvC")
    const othersCompeting = JSON.parse(game.treatment.competition).filter(condition => {
        return condition.split("v").includes(teams[0][0]) && condition.split("v").includes(teams[1][0])
    }).length === 1

    // Return them in an array to be destructured
    return (othersCompeting)
}
