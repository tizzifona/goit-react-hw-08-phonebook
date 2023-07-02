export const selectUser = state => state.auth.user;

export const userLoggedIn = state => state.auth.isLoggedIn;

export const userRefreshing = state => state.auth.isRefreshing;
