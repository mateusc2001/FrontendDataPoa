import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurarLinhasComponent } from './procurar-linhas.component';

describe('ProcurarLinhasComponent', () => {
  let component: ProcurarLinhasComponent;
  let fixture: ComponentFixture<ProcurarLinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurarLinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurarLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
