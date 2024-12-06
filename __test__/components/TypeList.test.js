import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import TypeList from "../../src/components/TypeList/index";
import { GET_POKEMON_TYPES } from "../../src/graphql/queries";

jest.mock("../../src/store/pokemonStore", () => ({
    __esModule: true,
    default: jest.fn(() => ({
        setSelectedType: jest.fn(),
    })),
}));

describe("TypeList Component", () => {
    const mocks = [
        {
            request: {
                query: GET_POKEMON_TYPES,
            },
            result: {
                data: {
                    pokemonTypes: [
                        { id: 1, name: "Fire" },
                        { id: 2, name: "Water" },
                    ],
                },
            },
        },
    ];

    test("renders Pokémon types when data is available", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <TypeList />
            </MockedProvider>,
        );

        const fireType = await screen.findByText("FIRE");
        const waterType = await screen.findByText("WATER");

        expect(fireType).toBeInTheDocument();
        expect(waterType).toBeInTheDocument();
    });
});
