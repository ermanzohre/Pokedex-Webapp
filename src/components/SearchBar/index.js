import { useState } from "react";
import { useQuery } from "@apollo/client";
import { CardContent, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { SEARCH_POKEMON } from "../../graphql/queries";
import LoadingSpinner from "../LoadingSpinner";
import { StyledSearchContainer, StyledTextField, StyledCard } from "./styled";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const { data, loading, error } = useQuery(SEARCH_POKEMON, {
        variables: { name: `%${search}%` },
        skip: !search,
    });

    const handlePokemonClick = (pokemonId) => {
        router.push(`/pokemon/${pokemonId}`);
    };

    return (
        <StyledSearchContainer>
            <StyledTextField label="Search Pokémon" variant="outlined" fullWidth onChange={(e) => setSearch(e.target.value)} />
            {loading && <LoadingSpinner />}
            {error && <Typography color="error">Error during search: {error.message}</Typography>}
            {!loading && data && data.pokemon_v2_pokemon.length === 0 && (
                <Typography variant="body1" color="warning">
                    No Pokémon matches your search.
                </Typography>
            )}
            {data && (
                <Stack spacing={2}>
                    {data?.pokemon_v2_pokemon?.map((pokemon,index) => (
                        <StyledCard key={`${pokemon.id}-${index}`} onClick={() => handlePokemonClick(pokemon?.id)}>
                            <CardContent>
                                <Typography variant="h6">{pokemon?.name}</Typography>
                            </CardContent>
                        </StyledCard>
                    ))}
                </Stack>
            )}
        </StyledSearchContainer>
    );
};

export default SearchBar;
