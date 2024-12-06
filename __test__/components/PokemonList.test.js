import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import PokemonList from "../../src/components/PokemonList/index";
import { GET_POKEMONS_BY_TYPE } from "../../src/graphql/queries";

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe("PokemonList Component", () => {
    test("renders without crashing", () => {
        const mocks = [
            {
                request: {
                    query: GET_POKEMONS_BY_TYPE,
                    variables: { typeId: 1 },
                },
                result: {
                    data: {
                        pokemons: [],
                    },
                },
            },
        ];

        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PokemonList />
            </MockedProvider>,
        );

        expect(screen.getByText(/select a type to see Pokémon/i)).toBeInTheDocument();
    });
});
