const fetch = require('node-fetch');

const getPokemonOfTypePromise = fetch => {
    return fetch('https://pokeapi.co/api/v2/type/13')
        .then(response => response.json())
        .then(data => {
            return {
                name: data.name,
                pokemon: data.pokemon,
                moves: data.moves
                
            }
        })
}

const getPokemonOfType = async (fetch) => {
    const getRequest= await fetch('https://pokeapi.co/api/v2/type/13');
        const data = await getRequest.json();
            return {
                name: data.name,
                pokemon: data.pokemon,
                moves: data.moves
        }
}

module.exports = {
    getPokemonOfType,
    getPokemonOfTypePromise
}