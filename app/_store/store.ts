import { create } from "zustand";

type State = {
  fighters: string[];
};

type Action = {
  updateFighters: (fighterId: string) => void;
  getSelectedFighters: () => string[];
};

export const useCreateTournamentStore = create<State & Action>((set, get) => ({
  fighters: [],
  updateFighters: (fighterId) =>
    set((state) => ({
      fighters: state.fighters.includes(fighterId)
        ? state.fighters.filter((id) => id !== fighterId)
        : [...state.fighters, fighterId],
    })),
  getSelectedFighters: () => get().fighters,
}));
