import type { NextPage } from 'next'
import Head from 'next/head'
import styled from "styled-components";
import {Voting} from "../components/Voting";

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <meta name="description" content="Voting app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <Voting />
            </Main>
        </Container>
    )
}

export default Home

const Container = styled.div`
`

const Main = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`