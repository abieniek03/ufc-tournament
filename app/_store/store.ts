import { create } from "zustand";

type State = {
  name: string;
  weightclassId: string;
  fighters: string[];
};

type Action = {
  updateData: (name: string, weightclassId: string) => void;
  updateFighters: (fighterId: string) => void;
  getData: () => State;
};

export const useCreateTournamentStore = create<State & Action>((set, get) => ({
  name: "",
  weightclassId: "",
  fighters: [],
  updateData: (name: string, weightclassId: string) =>
    set(() => ({ name, weightclassId })),
  updateFighters: (fighterId) =>
    set((prevState) => ({
      fighters: prevState.fighters.includes(fighterId)
        ? prevState.fighters.filter((id) => id !== fighterId)
        : [...prevState.fighters, fighterId],
    })),
  getData: () => ({
    name: get().name,
    weightclassId: get().weightclassId,
    fighters: get().fighters,
  }),
}));
