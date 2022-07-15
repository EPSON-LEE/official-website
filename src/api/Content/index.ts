import request from '../../utils/api/index';


// 动态列表
export const getArticleList = (data) => {
  return request.post('article/ig/search', data);
};

// 动态内容
export const getArticle = (path) => {
  return request.get(`article/ig/findOne/${path}`);
};


// 科研人员列表
export const getResearcherList = (data) => {
  return request.post('researcher/ig/search', data);
};

// 科研人员内容
export const getResearcher = (path) => {
  return request.get(`researcher/ig/findOne/${path}`);
};








// curl --location --request GET 'localhost:8080/researcher/ig/findOne/1'