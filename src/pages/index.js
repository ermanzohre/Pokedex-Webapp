import React from "react";
import { Container } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
import TypeList from "../components/TypeList";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";
import { Title } from "../styles/globalStyles";

const PokemonList = dynamic(() => import("../components/PokemonList"), {
    loading: () => <LoadingSpinner />,
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Pokédex-App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Explore Pokémon types and details in this Pokedex App" />
            </Head>
            <Container sx={{ maxWidth: "lg", padding: "20px" }}>
                <Title>Pokédex</Title>
                <SearchBar />
                <TypeList />
                <PokemonList />
            </Container>
        </>
    );
}
