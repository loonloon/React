import axios from "axios";

const instance = axios.create({
  baseURL: "sample-url"
});

export default instance;
