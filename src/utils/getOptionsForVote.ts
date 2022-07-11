const MAX_DEX_ID = 5

const getRandomPokemonIndex  = (notThisOne?: number): number => {
    let pokemonIndex: number

    do {
        pokemonIndex = 1 + Math.floor(Math.random() * (MAX_DEX_ID - 1))
    } while(pokemonIndex === notThisOne)

    return pokemonIndex
}

export const getOptionsForVote = () => {
    const firstId = getRandomPokemonIndex()
    const secondId = getRandomPokemonIndex(firstId)
    return [firstId, secondId]
}