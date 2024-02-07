
  const getTokenFromLocalStorage = localStorage.getItem("admin_user")
  ? JSON.parse(localStorage.getItem("admin_user"))
  : null;

export const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: getTokenFromLocalStorage
      ? `Bearer ${getTokenFromLocalStorage.token}`
      : null,
    Accept: "application/json",
  },
};


