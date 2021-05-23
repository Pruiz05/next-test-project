import React from "react";
import Container from "../components/Container";
import Head from "next/head";
import fetch from 'isomorphic-fetch'
import Users from "../components/users";


const Index = (props) => {

  console.log(props.users)
  return (
    <>
      <Container>
        <Head>
          <title>Next.js Project - Home </title>
        </Head>
        <h1>Next</h1>

        <Users users={props.users}/>
      </Container>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users`)

  const resJson = await res.json()

  return {
    users: resJson.data
  }
}

export default Index;
