import styled from "styled-components";

export const Voting = () => {
    return (
        <Container>
            <Title>Voting</Title>
            <Compare>
                <Member>
                    member1
                </Member>
                <Vs>
                    Vs
                </Vs>
                <Member>
                    member2
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

