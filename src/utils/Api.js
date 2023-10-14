// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://martikainenekaterina.ru";

const getRes = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const authorize = (username, password) => {
  return fetch(`${BASE_URL}/admin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  }).then(getRes);
};

export const addNewSection = (title) => {
  return fetch(`${BASE_URL}/technical/section`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(title),
  }).then(getRes);
};

export const getSections = () => {
  return fetch(`${BASE_URL}/technical`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getRes);
};

export const deleteSection = (id) => {
  return fetch(`${BASE_URL}/technical/section/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getRes);
};

export const createImage = (img, id) => {
  const formData = new FormData()
  formData.append('image', img);

  return fetch(`${BASE_URL}/technical/section/${id}`, {
    method: 'PATCH',
    body: formData
  })
}

export const deleteImage = (id, image) => {
  return fetch(`${BASE_URL}/technical/section/img/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  }).then(getRes);
}
