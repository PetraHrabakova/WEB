const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/5")
    xhr.onload = () => {
        if (xhr.status == 200) resolve(JSON.parse(xhr.responseText).name)
        else reject(new Error("Error fetching pokemon"))
    }
    xhr.onerror = () => reject(new Error("Network Error"))
    xhr.send()
})

promise
    .then(result => console.log(result))
    .catch(err => console.log(err))
