import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewChecked {
  json = {
    id: '4',
    title: 'Post de prueba',
    body: '@Component({\n  selector: \'app-post\',\n  templateUrl: \'./post.component.html\',\n  styleUrls: [\'./post.component.scss\']\n})',
    status: '0',
    created_at: '27/7/2019 02:30:59.797031',
    updated_at: '27/7/2019 02:30:59.797031'
  };
  markdownString = this.json.body;

  constructor() {
  }

  ngAfterViewChecked() {
  }

  ngOnInit() {
  }

}
