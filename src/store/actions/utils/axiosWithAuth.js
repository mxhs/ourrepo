import axios from "axios";
// create a new "instance" of axios with the config object built into it
// get the token from localstorage
export const axiosWithAuth = () => {
  let token = window.localStorage.getItem("token");
  token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhYmxvNDQ3IiwidXNlcklkIjo2MywiaWF0IjoxNjAzMzgwMjAxLCJleHAiOjE2MDMzOTgyMDF9.R86x328NiiB5eDq9Z9pT9xXhMY0Y-B-bD9gXcR9vu4U";
  return axios.create({
    headers: {
      authorization: token
    }
    // baseURL: "https://pintereach-backend-ajg.herokuapp.com/"
  });
};

