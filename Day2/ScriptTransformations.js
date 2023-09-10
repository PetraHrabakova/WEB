require("./scripts.js");

function oldestLivingScript(scripts) {
    let oldestYear = Infinity;
    let oldestScript = null;
    for (const script of scripts) {
        if (!script.living && script.year < oldestYear) {
            oldestYear = script.year;
            oldestScript = script.name;
        }
    }
    return oldestScript;
}

console.log(oldestLivingScript(SCRIPTS))
