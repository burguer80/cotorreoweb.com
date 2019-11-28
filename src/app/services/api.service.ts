import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getPosts() {
    return this.httpClient.get(`${this.apiURL}/posts`);
  }

  public getPostById(id: number) {
    return this.httpClient.get(`${this.apiURL}/posts/${id}`);
  }
}
