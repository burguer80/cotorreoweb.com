import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Post} from '../../../models/post';
import {Subscription} from 'rxjs';
import {PostsStoreService} from '../../../services/posts-store.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts = new Array<Post>();
  private number: any;
  key = 'data';
  subscriptions: Subscription[] = [];

  constructor(
    private apiService: ApiService,
    private postsStoreService: PostsStoreService
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(this.postsStoreService.posts$.subscribe(posts => {
      this.posts = posts;
    }));
    this.getPosts();
  }

  getPosts() {
    this.subscriptions.push(this.apiService.getPosts().subscribe((posts) => {
      const newPosts = posts.map(post => {
        return new Post(post);
      });
      this.postsStoreService.updatePosts(newPosts);
    }, err => console.log('Posts Component Error', err)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
