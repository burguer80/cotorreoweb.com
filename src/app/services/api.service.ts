import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {interval, Observable, of, throwError} from 'rxjs';
import {Post} from '../models/post';
import {flatMap, retryWhen} from 'rxjs/operators';
import {GlobalVars} from '../components/shared/enums/global-vars.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiURL}/posts`).pipe(
      // ...
      retryWhen(_ => {
        return interval(GlobalVars.delayInMilliSeconds).pipe(
          flatMap(count => count === GlobalVars.defaultMaxRetries ? throwError(GlobalVars.givingUp) : of(count))
        );
      })
    );
  }

  public getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.apiURL}/posts/${id}`);
  }
}

