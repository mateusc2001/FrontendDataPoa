import { TestBed } from '@angular/core/testing';

import { ProcurarLinhasService } from './procurar-linhas.service';

describe('ProcurarLinhasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcurarLinhasService = TestBed.get(ProcurarLinhasService);
    expect(service).toBeTruthy();
  });
});
