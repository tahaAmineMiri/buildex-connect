
import { ApiClient } from './client';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export class UserService {
  static async getCurrentUser() {
    return ApiClient.get<User>('/users/me');
  }

  static async updateCurrentUser(data: UpdateUserRequest) {
    return ApiClient.patch<User>('/users/me', data);
  }

  static async getUserById(id: string) {
    return ApiClient.get<User>(`/users/${id}`);
  }
}
