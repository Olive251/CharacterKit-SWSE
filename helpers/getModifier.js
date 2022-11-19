const  getModifier = (score) => {
    var modifier;

    if (score >= 10) {
        score = score - 10;
        modifier = Math.floor(score/2);
    } else {
        var scoreFromNeutral = 10 - score;
        modifier = Math.floor(scoreFromNeutral/2);
    }
    return modifier;
}

module.exports = {getModifier};