import axios from "axios";

export const get_details = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      return response;
    });
};

export const get_detail = async () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/todos/7')
      .then((response) => {
        return response;
      });
  };
  