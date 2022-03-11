export const getUser = (store) => store.user;

export const getUserName = (state) => getUser(state).username;
export const getIsLoginning = (state) => getUser(state).isLoginning;
export const getUserIsAuth = (state) => !!getUserName(state);
