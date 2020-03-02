import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsStoreService {
  private posts = new BehaviorSubject<Post[]>([]);
  posts$: Observable<Post[]> = this.posts.asObservable();

  constructor() {
  }

  updatePosts(posts: Post[]) {
    this.posts.next(posts);
  }


}
