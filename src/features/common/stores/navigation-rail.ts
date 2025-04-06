import { create } from "zustand";

type nrStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useNavigationRailStore = create<nrStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) =>
    set((_) => ({
      isOpen: isOpen,
    })),
}));
