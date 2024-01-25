const getTokenFromLoacalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: getTokenFromLoacalStorage
      ? `Bearer ${getTokenFromLoacalStorage.token}`
      : null,
      Accept:"application/json"
  },
};
