const xhr = new XMLHttpRequest()
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/5")
xhr.onload = () => {
    if (xhr.status == 200) console.log(JSON.parse(xhr.responseText).name)
}

xhr.onerror = () => console.log("Network Error!")
xhr.send()