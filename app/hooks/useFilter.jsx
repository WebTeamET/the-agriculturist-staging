import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

const useFilter = create(
  persist(
    (set) => ({
      filter: "newest",
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "filter",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFilter;
