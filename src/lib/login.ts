import api from './api';

import {UserContext} from '../contexts';

export default async function login(): Promise<UserContext.User> {
  try {
    const response = await api.get('/login');
    if (200 <= response.status && response.status < 300) {
      return response.data;
    } else {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
}
