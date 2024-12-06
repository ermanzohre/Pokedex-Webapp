import { CircularProgress } from "@mui/material";
import ScrollToTop from "../ScrollToTop";
import { DetailsContainer, PokemonName, BackButton } from "./styled";
import TypeList from "./typeSection";
import MoveList from "./moveSection";

const PokemonDetails = ({ pokemon, loading, error, onBackClick }) => {
    if (loading) {
        return (
            <DetailsContainer>
                <CircularProgress />
            </DetailsContainer>
        );
    }

    if (error) {
        return (
            <DetailsContainer>
                <p>Error loading Pokémon details: {error.message}</p>
            </DetailsContainer>
        );
    }

    return (
        <DetailsContainer>
            <BackButton variant="outlined" color="secondary" onClick={onBackClick}>
                Back to Main Page
            </BackButton>

            <PokemonName variant="h3">{pokemon?.name}</PokemonName>
            <TypeList types={pokemon?.pokemon_v2_pokemontypes || []} />
            <MoveList moves={pokemon?.moves || []} />
            <ScrollToTop />
        </DetailsContainer>
    );
};

export default PokemonDetails;
