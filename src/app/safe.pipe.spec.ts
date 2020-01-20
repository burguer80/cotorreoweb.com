import {SafePipe} from './safe.pipe';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import {inject} from '@angular/core/testing';

describe('SafePipe', () => {
  let pipe: SafePipe;

  beforeEach(inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    pipe = new SafePipe(sanitizer);
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
