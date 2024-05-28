import { create } from "zustand";

type State = {
  name: string;
  weightclassId: string;
  selectedFighters: string[];
};

type Action = {
  updateData: (name: string, weightclassId: string) => void;
  updateSelectedFighters: (fighterId: string) => void;
  getData: () => State;
};

export const useCreateTournamentStore = create<State & Action>((set, get) => ({
  name: "",
  weightclassId: "",
  selectedFighters: [],
  updateData: (name: string, weightclassId: string) =>
    set(() => ({ name, weightclassId })),
  updateSelectedFighters: (fighterId) =>
    set((prevState) => ({
      selectedFighters: prevState.selectedFighters.includes(fighterId)
        ? prevState.selectedFighters.filter((id) => id !== fighterId)
        : [...prevState.selectedFighters, fighterId],
    })),
  getData: () => ({
    name: get().name,
    weightclassId: get().weightclassId,
    selectedFighters: get().selectedFighters,
  }),
}));
