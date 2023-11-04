fetch("https://pokeapi.co/api/v2/pokemon/5")
    .then(response => {
        if (response.ok) return response.json()
        throw new Error("Network response was not OK")
    })
    .then(pokemon => console.log(pokemon.name))
    .catch(err => console.log(err))
