async function getPokemon(number) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number)
        if (!response.ok) throw new Error("Network response was not OK")
        let pokemon = await response.json()
        console.log(pokemon.name)
    } catch (err) {
        console.log(err)
    }
}

getPokemon(5)