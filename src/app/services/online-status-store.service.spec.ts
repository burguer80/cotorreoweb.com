import {TestBed} from '@angular/core/testing';

import {IsOnlineStoreService} from './is-online-store.service';

describe('OnlineStatusStoreService', () => {
  let service: IsOnlineStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsOnlineStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
