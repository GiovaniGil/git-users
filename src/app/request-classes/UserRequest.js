import CrudRequest from '@/app/arch/crud/CrudRequest';
import http from '@/app/arch/services/HttpService';

export default class UserRequest extends CrudRequest {
  static baseUrl() {
    return 'users';
  }

  static getRepos(id) {
    return http.get(`${this.baseUrl()}/${id}/repos`);
  }
}
