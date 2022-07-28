import { TestBed } from '@angular/core/testing';

import { InputArrayService } from './input-array.service';

describe('InputArrayService', () => {
  let service: InputArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
