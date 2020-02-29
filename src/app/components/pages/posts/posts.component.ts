import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = new Array<Post>();
  private number: any;
  key = 'data';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts.map(post => {
        return new Post(post);
      });
    });
  }
}
