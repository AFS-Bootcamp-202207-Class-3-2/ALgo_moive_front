import api from "./api";

const md5 = require("md5");

export const register = (username, password) => {
  return api.post("/users/register", {
    username: username,
    password: md5(password),
  });
};

export const login = (username, password) => {
  return api.post("/login", {
    username: username,
    password: md5(password),
  });
};
