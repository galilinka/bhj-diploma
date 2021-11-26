/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

 const createRequest = async (options = {}) => {
    let formData = null;
    console.log(options.data)
    if (options.method === 'GET' && options.data)  {
        options.url = `${options.url}?mail=${options.data.email}&password=${options.data.password}`
    } else if (options.method === 'POST' && options.data) {
        formData = new FormData;
        formData.append( 'mail', options.data.email);
        formData.append( 'password', options.data.password);
    } //put delete 
    fetch(options.url, options.data && {
        method: options.method,
        body: formData ? JSON.stringify(formData) : null,
    }).then(response => 
    console.log(response)
).then(data => options.callback(null, data)).catch(err => options.callback(err))
};




