import styled from "styled-components";
import {getOptionsForVote} from "../utils/getOptionsForVote";
import {trpc} from "../utils/trpc";
import {useEffect, useState} from "react";
import {Loading} from "./Loading";

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

    if (!ids) {
        return <Loading />
    }

    if (firstPokemon.isLoading || secondPokemon.isLoading) {
        return <Loading />
    }

    return (
        <Container>
            <Title>Voting</Title>
            <Compare>
                <Member>
                    <Sprite src={firstPokemon?.data?.sprites?.front_default || ''} />
                </Member>
                <Vs>
                    Vs
                </Vs>
                <Member>
                    <Sprite src={secondPokemon?.data?.sprites?.front_default || ''} />
                </Member>

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
const Member = styled.div`
  display: flex;
  background-color: mistyrose;
  color: black;
  width: 160px;
  height: 160px;
  align-items: center;
  justify-content: center;
`
const Vs = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  align-items: center;
  justify-content: center;
`
const Sprite = styled.img`
  width: 100%;
`
