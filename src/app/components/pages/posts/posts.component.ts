import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe((res) => {
      res['data'].forEach(member => {
        this.posts.push(new Post(member));
      });
      console.log(this.posts);
    });

    this.apiService.getPostById(3).subscribe((res) => {
      // console.log(new Post(res['data']));
    });
  }
}
