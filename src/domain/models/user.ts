import api from '../../lib/api';

export interface Model {
  id: number;
  name: string;
}

export async function login(): Promise<Model> {
  const response = await api.get('/login');
  if (200 <= response.status && response.status < 300) {
    return response.data;
  }
}
