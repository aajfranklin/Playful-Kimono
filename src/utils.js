import config from './config';

export const isTouchDevice = () => window.matchMedia('(pointer:coarse)').matches;

const kimonoHeaders = {
  'Content-Type': 'application/json',
  'Origin': 'kimono'
}

const s3Headers = {
  'Content-Type': 'image/png',
  'Origin': 'kimono'
}

export const GET = (endpoint, queryString) => {
  const url = config.api.baseUrl + endpoint + (queryString === undefined ? '' : queryString);
  return fetch(url, { method: 'GET', headers: kimonoHeaders})
    .then(res => resolveApiResponse(res));
}

export const POST = (endpoint, data) => {
  return fetch(config.api.baseUrl + endpoint, { method: 'POST', headers: kimonoHeaders, body: data })
    .then(res => resolveApiResponse(res));
}

export const S3PUT = (presignedUrl, file) => {
  return fetch(presignedUrl, { method: 'PUT', body: file, headers: s3Headers})
}

const resolveApiResponse = (res) => {
  return new Promise((resolve, reject) => {
    if (res.status !== 200) return reject(new Error(res.status));
    return resolve(res.json());
  });
};