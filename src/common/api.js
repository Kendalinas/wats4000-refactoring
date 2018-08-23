// Base API Configuration

import axios from 'axios';

const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config)) {
   //set common parameters for each request to the API.
   config.params.APPID = '933894d4f6ebb47882bb731697aa92c6';
   config.params.units = 'imperial';

   return config;
}, function(error) {
    return Promise.reject(error);

});