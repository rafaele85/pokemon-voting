import {Pokemon} from "../types/pokemon";
import styled from "styled-components";

type Props = {
    pokemon: Pokemon
    onVote: (id: number) => void
}

export const PokemonComponent = (props: Props) => {
    const handleVote = () => {
        props.onVote(props.pokemon.id)
    }

    const pokemon = props.pokemon
    return (
        <Member>
            <Sprite src={pokemon?.sprite || ''} />
            <Bottom>
                <Nickname>{pokemon.nickname}</Nickname>
                <Button onClick={handleVote}>Rounder</Button>
            </Bottom>
        </Member>
    )
}


const Member = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 160px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-bottom: 35px;
`
const Sprite = styled.img`
  width: 100%;
`

const Nickname = styled.div`
  text-align: center;
  font-weight: bold;
  padding-bottom: 10px;
  color: white;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  border-radius: 5px;
  padding: 5px;
`