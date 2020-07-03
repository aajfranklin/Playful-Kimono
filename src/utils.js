import config from './config';

const headers = {
  'Content-type': 'application/json'
}

export const GET = (endpoint) => {
  return fetch(config.api.baseUrl + endpoint, { method: 'GET', headers})
    .then(res => resolveApiResponse(res));
}

const resolveApiResponse = (res) => {
  return new Promise((resolve, reject) => {
    if (res.status !== 200) return reject(new Error(res.status));
    return resolve(res.json());
  });
};