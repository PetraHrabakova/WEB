require("./scripts.js")

function rtlScriptNames1(scripts) {
    const newArray = scripts.filter(x => x.direction === "rtl")
    return newArray.map(x => x.name)
}

function rtlScriptNames2(scripts) {
    let flattenedScripts = scripts.reduce(function (accumulator, currentElement) {
        if (currentElement.direction === "rtl") {
            accumulator.push(currentElement.name);
        }
        return accumulator;
    }, []);
    return flattenedScripts;
}

console.log(rtlScriptNames1(SCRIPTS))
console.log(rtlScriptNames2(SCRIPTS))

