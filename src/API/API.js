const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const getAllProducts = () => {
  return fetch(BASE_API_URL + `/products/all`).then(res => res.json())
};

export const getProduct = (id) => {
  return fetch(BASE_API_URL + `/products/${id}`).then(res => res.json())
};

export const addProduct = (productData) => {
  return fetch(BASE_API_URL + '/product', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  })  
};

export const getOrders = (uid) => {
  return fetch(BASE_API_URL + `/orders/${uid}`).then(res => res.json())
};

export const placeOrder = (order) => {
  return fetch(BASE_API_URL + '/orders', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
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
