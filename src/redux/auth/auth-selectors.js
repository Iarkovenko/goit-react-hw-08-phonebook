const getIsAuthenticated = state => state.auth.token;

const getUsersName = state => state.auth.user.name;

// eslint-disable-next-line
export default { getIsAuthenticated, getUsersName };