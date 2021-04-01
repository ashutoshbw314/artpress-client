const BASE_API_URL = 'http://localhost:3000';

export const getAllProducts = (id = '') => {
  return fetch(BASE_API_URL + `/api/products/all`).then(res => res.json())
};

export const addProduct = (productData) => {
  return fetch(BASE_API_URL + '/api/product', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  })  
};


/*export const createSomething = (myObj) => {
  return fetch(endPoints.create, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(myObj)
  })  
};

export const updateSomething = (myObj, id) => {
  return fetch(`${endPoints.base}/${id}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(myObj)
  })  
};

export const deleteSomething = (id) => {
  return fetch(`${endPoints.base}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })  
};*/
