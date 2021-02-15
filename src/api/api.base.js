/*
* Zeynep Akyel Cinar <zeynepakyel92@gmail.com>
* API Base
*/


import axios from 'axios';

export default axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});