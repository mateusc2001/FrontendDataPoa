import { TestBed } from '@angular/core/testing';

import { LinhaOnibusService } from './linha-onibus.service';

describe('LinhaOnibusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinhaOnibusService = TestBed.get(LinhaOnibusService);
    expect(service).toBeTruthy();
  });
});
