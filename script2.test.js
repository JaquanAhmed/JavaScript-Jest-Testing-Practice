const fetch = require('node-fetch');
const pokeAPI = require('./script2');

it('calls pokeAPI to get a certain type of pokemon', () => {
    expect.assertions(1);
    return pokeAPI.getPokemonOfType(fetch).then(data => {
        expect(data.name).toEqual('electric');
    })
})

it('calls pokeAPI to get certain type of pokemon with a promise', (done) => {
    expect.assertions(2);
    pokeAPI.getPokemonOfTypePromise(fetch).then(data => {
        expect(data.name).toEqual('electric');
        expect(data.pokemon.length).toBeGreaterThan(70);
        done();
    })
})

it('getPeople returns name and pokemon', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            name: 'electric',
            pokemon: [0,1,2,3,4,5]
        })
    }))

    expect.assertions(4)
    return pokeAPI.getPokemonOfTypePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://pokeapi.co/api/v2/type/13');
        expect(data.name).toEqual('electric');
        expect(data.pokemon.length).toBeGreaterThan(5);
    
    })
})

