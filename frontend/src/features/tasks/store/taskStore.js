import { create } from "zustand";

const initialState = {
  editingTask: null,
};

export const useTaskStore = create((set) => ({
  ...initialState,

  // editingTask: null,
  setEditingTask: (task) =>
    set({
      editingTask: task,
    }),
  clearEditingTask: () => set(initialState),
}));
