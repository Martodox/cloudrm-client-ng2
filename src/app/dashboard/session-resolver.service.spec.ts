/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionResolverService } from './session-resolver.service';

describe('SessionResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionResolverService]
    });
  });

  it('should ...', inject([SessionResolverService], (service: SessionResolverService) => {
    expect(service).toBeTruthy();
  }));
});
