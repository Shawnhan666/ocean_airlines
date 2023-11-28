export const getConditionalsOpen = (player, dbIndex) => {
    return player.get(dbIndex) === "" || typeof player.get(dbIndex) === "undefined";
}

export const getConditionalsMulti = (player, dbIndex, questions) => {
    return player.get(dbIndex) ? Object.keys(player.get(dbIndex)).length !== questions.length : true;
}