import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
  constructor() {
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
  }

  onSubmit() {
    this.htmlContent = this.editorForm.get('editor').value;
    console.log(this.htmlContent);
  }

}
