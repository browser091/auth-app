export const getUser = (store) => store.user;

export const getUserName = (state) => getUser(state).username;
export const getUserPassword = (state) => getUser(state).password;
export const getUserIsAuth = (state) => getUser(state).isAuth;
export  const  getError=(state)=>getUser(state).error
