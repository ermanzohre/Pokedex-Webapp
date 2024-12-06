import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_POKEMON_INFO } from "../../graphql/queries";
import PokemonDetails from "../../components/Details";

const PokemonDetailsPage = () => {
    const router = useRouter();
    const { pokemonId } = router.query;

    const { data, loading, error } = useQuery(GET_POKEMON_INFO, {
        variables: { id: parseInt(pokemonId) },
        skip: !pokemonId,
    });

    const handleBackClick = () => {
        router.push("/");
    };

    const pokemon = data?.pokemon_v2_pokemon[0];

    return <PokemonDetails pokemon={pokemon} loading={loading} error={error} onBackClick={handleBackClick} />;
};

export default PokemonDetailsPage;
