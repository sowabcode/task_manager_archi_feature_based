// import { create } from "zustand";

// const initialState = {
//   user: null,
//   isAuthLoading: false,
// };

// export const useAuthStore = create((set, get) => ({
//   initialState,

//   setUser: (user) =>
//     set({
//       user,
//     }),

//   setAuthLoading: (loading) =>
//     set({
//       isAuthLoading: loading,
//     }),

//   logout: () => {
//     localStorage.removeItem("accessToken");
//     set(initialState);
//   },

//   isAuthenticated: () => !!get().user,
// }));

import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,

  isAuthLoading: true,

  setUser: (user) =>
    set({
      user,
    }),

  setAuthLoading: (loading) =>
    set({
      isAuthLoading: loading,
    }),

  logout: () =>
    set({
      user: null,
      isAuthLoading: false,
    }),
}));
