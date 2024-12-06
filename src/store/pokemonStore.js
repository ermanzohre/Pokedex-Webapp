import { create } from 'zustand';

const usePokemonStore = create((set) => ({
  selectedType: null,
  setSelectedType: (type) => set({ selectedType: type }),

  pokemonDetails: null,
  setPokemonDetails: (details) => set({ pokemonDetails: details }),
}));

export default usePokemonStore;
