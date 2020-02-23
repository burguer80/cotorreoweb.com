import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];
  private number: any;

  constructor() {
  }

  ngOnInit() {
  }

  randomPhotoSrc(): string {
    const photoId: number = this.number = this.randomInteger(1, 1);
    return `https://i.picsum.photos/id/${photoId}/300/300.jpg`;
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
