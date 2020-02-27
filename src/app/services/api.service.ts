import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiURL}/posts`);
  }

  public getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.apiURL}/posts/${id}`);
  }
}
