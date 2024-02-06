const getTokenFromLoacalStorage = localStorage.getItem("admin_user")
  ? JSON.parse(localStorage.getItem("admin_user"))
  : null;


export const config = {
  headers: {
    Authorization: getTokenFromLoacalStorage
      ? `Bearer ${getTokenFromLoacalStorage.token}`
      : null,
    Accept: "application/json",
  },
};
