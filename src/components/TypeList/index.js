import React, { memo } from "react";
import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { GET_POKEMON_TYPES } from "../../graphql/queries";
import usePokemonStore from "../../store/pokemonStore";
import { typeColors } from "../../utils/constant";
import LoadingSpinner from "../LoadingSpinner";
import { PokemonTypeBox, PokemonTypeListWrapper } from "./styled";

const TypeList = memo(() => {
    const { data, loading, error } = useQuery(GET_POKEMON_TYPES);
    const setSelectedType = usePokemonStore((state) => state.setSelectedType);

    if (loading) {
        return <LoadingSpinner />;
    }
    if (error) return <p>Error loading types: {error.message}</p>;

    return (
        <PokemonTypeListWrapper>
            {data.pokemonTypes.map((type, index) => (
                <PokemonTypeBox
                    key={`${type.id}-${index}`}
                    $backgroundColor={typeColors[type.name.toLowerCase()] || "#ccc"}
                    onClick={() => setSelectedType(type.id)}
                >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {type.name.toUpperCase()}
                    </Typography>
                </PokemonTypeBox>
            ))}
        </PokemonTypeListWrapper>
    );
});

TypeList.displayName = "TypeList";
export default TypeList;
