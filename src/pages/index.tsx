import type { NextPage } from 'next'
import Head from 'next/head'
import styled from "styled-components";
import {Voting} from "../components/Voting";
import {trpc} from "../utils/trpc";
import {Loading} from "../components/Loading";

const Home: NextPage = () => {
    const { data, isLoading } = trpc.useQuery(['hello', {text: 'Theo'}])

    if (isLoading) {
        return <Loading />
    }

    if (data) {
        return (
            <div>
                {data.greeting}
            </div>
        )
    }

    return (
        <Container>
            <Head>
                <title>Voting</title>
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