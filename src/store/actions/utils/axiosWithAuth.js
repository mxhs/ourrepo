import axios from "axios";
// create a new "instance" of axios with the config object built into it
// get the token from localstorage
export const axiosWithAuth = () => {
  let token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token
    }
    // baseURL: "https://pintereach-backend-ajg.herokuapp.com/"
  });
};

