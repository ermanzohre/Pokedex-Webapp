import usePokemonStore from "../../src/store/pokemonStore";

beforeEach(() => {
    usePokemonStore.setState({ selectedType: null, pokemonDetails: null });
});

describe("Pokemon Store", () => {
    it("should have initial state", () => {
        const initialState = usePokemonStore.getState();
        expect(initialState.selectedType).toBe(null);
        expect(initialState.pokemonDetails).toBe(null);
    });
    it("should set selected type", () => {
        const store = usePokemonStore.getState();
        store.setSelectedType(1);
        const updatedStore = usePokemonStore.getState();
        expect(updatedStore.selectedType).toBe(1);
    });

    it("should set Pokémon details", () => {
        const store = usePokemonStore.getState();
        const details = { id: 1, name: "Pikachu" };
        store.setPokemonDetails(details);
        const updatedStore = usePokemonStore.getState();
        expect(updatedStore.pokemonDetails).toEqual(details);
    });
});
