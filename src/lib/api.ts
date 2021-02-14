import api from 'axios';

export default api.create({
  baseURL: 'https://api.takigawa-memo.com/',
  withCredentials: true,
});
