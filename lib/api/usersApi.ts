import { api } from './api';
import type { UsersApiResponse } from '@/types/user';
import { getErrorMessage } from '@/lib/utils';



export interface FetchUsersParams {
  page?: number;
  perPage?: number;
}

export async function fetchUsers(
  params: FetchUsersParams
): Promise<UsersApiResponse> {
  try {
    const response = await api.get<UsersApiResponse>('/users', { params });
    return response.data;
  } catch (error) {
    throw new Error(
      getErrorMessage(error, 'Не вдалося завантажити мандрівників')
    );
  }
}
