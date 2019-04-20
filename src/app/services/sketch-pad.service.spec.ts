import { TestBed } from '@angular/core/testing';

import { SketchPadService } from './sketch-pad.service';

describe('SketchPadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SketchPadService = TestBed.get(SketchPadService);
    expect(service).toBeTruthy();
  });
});
