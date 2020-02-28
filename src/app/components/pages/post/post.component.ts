import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  editorForm: FormGroup;
  config = {
    toolbar: [[
      {font: []},
      {header: [1, 2, 3, 4, 5, 6, false]},
      {header: 1}, {header: 2},
      'bold', 'italic', 'underline', 'strike',
      {color: []},
      {background: []},
      {list: 'ordered'}, {list: 'bullet'},
      {align: []},
      'blockquote',
      'code-block',
      {indent: '-1'}, {indent: '+1'},
      'link',
      'image',
      'video'
    ]]
  };
  htmlContent = null;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });

    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.apiService.getPostById(id).subscribe((post: Post) => {
        this.post = post;
        this.editorForm.get('editor').setValue(this.post.body);
      });
    });
  }

  onSubmit() {
    this.updateEditorForm();
  }

  tabClick(tab) {
    this.updateEditorForm();
  }

  updateEditorForm() {
    this.post.body = this.editorForm.get('editor').value;
    this.htmlContent = this.post.body;
  }
}
