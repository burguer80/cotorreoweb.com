import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostComponent} from './post.component';
import {SafePipe} from '../../../safe.pipe';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent, SafePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
