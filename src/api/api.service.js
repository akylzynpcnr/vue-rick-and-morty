/*
* Zeynep Akyel Cinar <zeynepakyel92@gmail.com>
* API Methods
*/

import Base from './api.base';

export const API = {
    getCharacters: () => {
        return Base.get("character")
    },
    getCharacter: (id) => {
        return Base.get(`character/${id}`);
    },
    getEpisodes: () => {
        return Base.get(`episode`);
    } 
}