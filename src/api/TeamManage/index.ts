import request from '../../utils/api/index';

export const AddResearcher = (data) => {
  return request.post('researcher/update', data);
};

export const getResearcher = (data) => {
  return request.post('researcher/ig/search', data);
};


export const moveUpResearcher = (path) => {
  return request.get(`researcher/move/up/${path}`);
};


export const moveDownResearcher = (path) => {
  return request.get(`researcher/move/down/${path}`);
};

export const delResearcher = (path) => {
  return request.delete(`researcher/deleteOne/${path}`);
};

