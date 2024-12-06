import { useQuery } from "@apollo/client";
import { CardContent } from "@mui/material";
import { useRouter } from "next/router";
import { GET_POKEMONS_BY_TYPE } from "../../graphql/queries";
import usePokemonStore from "../../store/pokemonStore";
import LoadingSpinner from "../LoadingSpinner";
import ScrollToTop from "../ScrollToTop";
import { StyledPokemonListContainer, StyledPokemonCard, StyledPokemonName, StyledMessage } from "./styled";

const PokemonList = () => {
    const selectedType = usePokemonStore((state) => state.selectedType);
    const router = useRouter();
    const { data, loading, error } = useQuery(GET_POKEMONS_BY_TYPE, {
        variables: { typeId: selectedType },
        skip: !selectedType,
    });

    if (!selectedType) return <p>Select a type to see Pokémon.</p>;
    if (loading) {
        return <LoadingSpinner />;
    }
    if (error) return <StyledMessage color="error">Error loading Pokémon: {error.message}</StyledMessage>;

    if (!data || data?.pokemons?.length === 0) {
        return <StyledMessage>There is no Pokémon in the selected type.</StyledMessage>;
    }

    return (
        <StyledPokemonListContainer>
            {data.pokemons.map(({ pokemon }, index) => (
                <StyledPokemonCard key={`${pokemon?.id}-${index}`} onClick={() => router.push(`/pokemon/${pokemon?.id}`)}>
                    <CardContent>
                        <StyledPokemonName variant="h6">{pokemon?.name}</StyledPokemonName>
                    </CardContent>
                </StyledPokemonCard>
            ))}
            <ScrollToTop />
        </StyledPokemonListContainer>
    );
};

export default PokemonList;
