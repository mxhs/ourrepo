import axios from "axios";
// create a new "instance" of axios with the config object built into it
// get the token from localstorage
export const axiosWithAuth = () => {
  let token = window.localStorage.getItem("token");
  token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdldHdpdGhpdCIsInVzZXJJZCI6NjcsImlhdCI6MTYwMzM4MDMwMiwiZXhwIjoxNjAzMzk4MzAyfQ.CR6ERzBEbHvBZzX9ktWBFDskpstrT06KhPJ2qHemjHM";
  return axios.create({
    headers: {
      authorization: token
    }
    // baseURL: "https://pintereach-backend-ajg.herokuapp.com/"
  });
};

