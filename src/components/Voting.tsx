import styled from "styled-components";
import {getOptionsForVote} from "../utils/getOptionsForVote";
import {trpc} from "../utils/trpc";
import {useEffect, useState} from "react";
import {Loading} from "./Loading";
import {PokemonComponent} from "./PokemonComponent";

const resource = 'get-pokemon-by-id'

export const Voting = () => {

    const [ids, setIds] = useState<number[]>([0, 0])

    useEffect(() => {
        const _ids = getOptionsForVote()
        setIds(_ids)
    }, [])

    const [firstId, secondId] = ids
    const firstPokemon = trpc.useQuery([resource, {id: firstId}])
    const secondPokemon = trpc.useQuery([resource, {id: secondId}])

    const handleVote = (id: number) => {
        console.log('-----handleVote', id)
    }

    if (!ids || !firstPokemon?.data || !secondPokemon?.data || firstPokemon.isLoading || secondPokemon.isLoading) {
        return <Loading />
    }

    return (
        <Container>
            <Title>Voting</Title>
            <Compare>
                <PokemonComponent pokemon={firstPokemon?.data} onVote={handleVote} />
                <Vs>
                    Vs
                </Vs>
                <PokemonComponent pokemon={secondPokemon?.data} onVote={handleVote} />
            </Compare>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  display: flex;
`
const Compare = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  padding: 70px;
`

const Vs = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  align-items: center;
  justify-content: center;
`

