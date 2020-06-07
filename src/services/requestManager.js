import Axios from "axios";

const request = (config) => {
  config.url = `https://pokeapi.co/api/v2/${config.url}`;
  return Axios(config);
};

const requestAuthenticated = (config, token) => {
  config.headers = {
    "x-access-token": token,
  };
  return request(config);
};

const get = async (url) => {
  return request({
    method: "get",
    url,
  });
};

const getAuthenticated = async (url, token) => {
  return requestAuthenticated(
    {
      method: "get",
      url,
    },
    token
  );
};

const put = async (url, data) => {
  return request({
    method: "put",
    url,
    data: { ...data },
  });
};

const post = async (url, data) => {
  return request({
    method: "post",
    url,
    data: { ...data },
  });
};

export const RequestManager = {
  get,
  getAuthenticated,
  post,
  put,
};
