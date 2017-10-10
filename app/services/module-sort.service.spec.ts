/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModuleSortService } from './module-sort.service';

describe('ModuleSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleSortService]
    });
  });

  it('should ...', inject([ModuleSortService], (service: ModuleSortService) => {
    expect(service).toBeTruthy();
  }));
});
