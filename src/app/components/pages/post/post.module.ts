import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './post.component';

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PostsRoutingModule} from '../posts/posts-routing.module';

import {QuillModule} from 'ngx-quill';
import {ReactiveFormsModule} from '@angular/forms';
import {SafePipe} from '../../../safe.pipe';

@NgModule({
  declarations: [PostComponent, SafePipe],
  imports: [
    CommonModule,
    PostRoutingModule,
    CommonModule,
    PostsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: []
})
export class PostModule {
}
