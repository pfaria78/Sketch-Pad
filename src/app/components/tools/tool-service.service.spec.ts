import { TestBed } from '@angular/core/testing';

import { ToolService } from './tool-service.service';

describe('ToolServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolService = TestBed.get(ToolService);
    expect(service).toBeTruthy();
  });
});
