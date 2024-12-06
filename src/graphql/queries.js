import { gql } from "@apollo/client";

export const GET_POKEMON_TYPES = gql`
    query {
        pokemonTypes: pokemon_v2_type {
            id
            name
        }
    }
`;

export const GET_POKEMONS_BY_TYPE = gql`
    query ($typeId: Int!) {
        pokemons: pokemon_v2_pokemontype(where: { type_id: { _eq: $typeId } }) {
            pokemon: pokemon_v2_pokemon {
                id
                name
            }
        }
    }
`;

export const SEARCH_POKEMON = gql`
    query ($name: String!) {
        pokemon_v2_pokemon(where: { name: { _ilike: $name } }) {
            id
            name
            moves: pokemon_v2_pokemonmoves {
                move: pokemon_v2_move {
                    name
                    accuracy
                }
            }
        }
    }
`;

export const GET_POKEMON_INFO = gql`
    query ($id: Int!) {
        pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
            name
            pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
            moves: pokemon_v2_pokemonmoves(distinct_on: move_id) {
                move: pokemon_v2_move {
                    name
                    accuracy
                }
            }
        }
    }
`;
