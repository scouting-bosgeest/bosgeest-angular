import { TestBed, inject } from '@angular/core/testing';

import { TrackListService } from './track-list.service';

describe('TrackListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackListService]
    });
  });

  it('should be created', inject([TrackListService], (service: TrackListService) => {
    expect(service).toBeTruthy();
  }));
});
