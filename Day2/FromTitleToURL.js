function urlSlug(title) {
    let newText = title[0].toLowerCase()
    for (i = 1; i < title.length; i++) {
        if (title[i] == " ") {
            newText += "-"
            newText += title[i + 1].toLowerCase()
            i++ // Make it skip the function in upper case because that has
            // already been added to the string above
        }
        else {
            newText += title[i]
        }
    }
    return newText;
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs a Whetstone"))
