import request from '../../utils/api/index';

export const uploadImg = (formData) => {
  console.log(formData);
  return request.post('media/upload', formData);
};

