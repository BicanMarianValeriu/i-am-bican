export const USER = '[User]'; // Namespace
export const USER_GET_TOKEN = `${USER} TOKEN:GET`;
export const USER_GET_TOKEN_SUCCESS = `${USER} TOKEN:SUCCESS`;
export const USER_GET_TOKEN_ERROR = `${USER} TOKEN:ERROR`;
export const USER_VERIFY_TOKEN = `${USER} TOKEN:VERIFY`;
export const USER_VERIFY_TOKEN_SUCCESS = `${USER} TOKEN:VERIFY_SUCCESS`;
export const USER_VERIFY_TOKEN_ERROR = `${USER} TOKEN:VERIFY_ERROR`;
export const USER_LOGIN = `${USER} LOGIN`;
export const USER_LOGIN_SUCCESS = `${USER} LOGIN:SUCCESS`;
export const USER_LOGIN_ERROR = `${USER} LOGIN:ERROR`;
export const USER_LOGOUT = `${USER} LOGOUT`;
export const USER_LOGOUT_SUCCESS = `${USER} LOGOUT:SUCCESS`;
export const USER_LOGOUT_ERROR = `${USER} LOGOUT:ERROR`;
export const UPDATE_USER = `${USER} UPDATED`;

export const getToken = ({ username, password }) => ({ type: USER_GET_TOKEN, payload: { username, password } });
export const authToken = payload => ({ type: USER_LOGIN, payload });
export const verifyToken = payload => ({ type: USER_VERIFY_TOKEN, payload });
export const userLogout = payload => ({ type: USER_LOGOUT, payload });
export const updateUser = payload => ({ type: UPDATE_USER, payload });