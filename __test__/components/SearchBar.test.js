import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import SearchBar from "../../src/components/SearchBar/index";
import { SEARCH_POKEMON } from "../../src/graphql/queries";

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe("SearchBar Component", () => {
    const mocks = [
        {
            request: {
                query: SEARCH_POKEMON,
                variables: { name: "%pikachu%" },
            },
            result: {
                data: {
                    pokemon_v2_pokemon: [
                        {
                            id: 1,
                            name: "Pikachu",
                            moves: [
                                {
                                    move: {
                                        name: "Thunder Shock",
                                        accuracy: 100,
                                    },
                                },
                                {
                                    move: {
                                        name: "Quick Attack",
                                        accuracy: 95,
                                    },
                                },
                            ],
                        },
                    ],
                },
            },
        },
    ];

    test("renders search input", () => {
        render(
            <MockedProvider mocks={[]} addTypename={false}>
                <SearchBar />
            </MockedProvider>,
        );

        const input = screen.getByLabelText(/search pokémon/i);
        expect(input).toBeInTheDocument();
    });

    test("displays loading spinner when loading", () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SearchBar />
            </MockedProvider>,
        );

        fireEvent.change(screen.getByLabelText(/search pokémon/i), {
            target: { value: "pikachu" },
        });

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    test("displays search results", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SearchBar />
            </MockedProvider>,
        );

        fireEvent.change(screen.getByLabelText(/search pokémon/i), {
            target: { value: "pikachu" },
        });

        const result = await screen.findByText("Pikachu");
        expect(result).toBeInTheDocument();
    });

    test("shows 'No Pokémon matches' message if no results found", async () => {
        const noResultMock = [
            {
                request: {
                    query: SEARCH_POKEMON,
                    variables: { name: "%unknown%" },
                },
                result: {
                    data: {
                        pokemon_v2_pokemon: [],
                    },
                },
            },
        ];

        render(
            <MockedProvider mocks={noResultMock} addTypename={false}>
                <SearchBar />
            </MockedProvider>,
        );

        fireEvent.change(screen.getByLabelText(/search pokémon/i), {
            target: { value: "unknown" },
        });

        const noResultsMessage = await screen.findByText(/no pokémon matches your search/i);
        expect(noResultsMessage).toBeInTheDocument();
    });
});
