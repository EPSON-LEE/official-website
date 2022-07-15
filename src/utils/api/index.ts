import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

axios.defaults.withCredentials = true
document.cookie = 'JSESSIONID=20CBCC5725C4343576B83ED31CB0D60E'

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 1000,
    withCredentials: true,
    ...config,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      // 在发送请求之前做些什么
      const { loading = true } = config;
      // config.headers.Authorization = vm.$Cookies.get('vue_admin_token');
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      console.log('response:', response?.data);
      const { status, data } = response;
      // config设置responseType为blob 处理文件下载
      if (response.data instanceof Blob) {
      } else {
        if (status === 200) return Promise.resolve(data?.obj);
        else if (status === 401) {
          return Promise.reject(response.data);
        }
      }
    },
    function (error) {
      // 对响应错误做点什么
      console.log('error-response:', error.response);
      console.log('error-config:', error.config);
      console.log('error-request:', error.request);
      const { loading = true } = error.config;
      return Promise.reject(error);
    }
  );
  return instance;
};



const request = createAxiosByinterceptors({
  baseURL: 'http://82.156.213.198/apis',
});

export default request;