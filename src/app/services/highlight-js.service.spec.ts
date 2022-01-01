import { TestBed } from '@angular/core/testing';

import { HighlightJsService } from './highlight-js.service';

describe('HighlightJsService', () => {
  let service: HighlightJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
