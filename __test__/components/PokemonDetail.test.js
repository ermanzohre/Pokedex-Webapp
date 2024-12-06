import { render, screen } from "@testing-library/react";
import PokemonDetails from "../../src/components/Details/index";

describe("PokemonDetails Component", () => {
    test("displays loading spinner when loading", () => {
        render(<PokemonDetails loading={true} />);

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    test("displays error message when there is an error", () => {
        render(<PokemonDetails error={{ message: "Failed to load data" }} />);

        expect(screen.getByText(/error loading pokémon details/i)).toBeInTheDocument();
        expect(screen.getByText(/failed to load data/i)).toBeInTheDocument();
    });

    test("renders Pokémon name when data is provided", () => {
        const mockPokemon = { name: "Pikachu" };

        render(<PokemonDetails pokemon={mockPokemon} loading={false} error={null} />);

        expect(screen.getByText("Pikachu")).toBeInTheDocument();
    });
});
