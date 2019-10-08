import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  editorForm: FormGroup;
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
