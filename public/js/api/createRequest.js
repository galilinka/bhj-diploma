/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

 const createRequest = (options = {}) => {
    let {
      url,
      data,
      method,
      callback
    } = options;
  
    console.log('data', data)
    let formData = null;
    if (method === 'GET' && data) {
      url = `${url}mail=${data.email}&password=${data.password}`;
    } else if (method !== 'GET') {
      formData = {
        mail: data.email,
        password: data.password,
      };
    }
    fetch(url, {
      method,
      body: formData && JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(err => callback(err));
  };




