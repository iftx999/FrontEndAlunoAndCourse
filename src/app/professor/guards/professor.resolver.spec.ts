import { TestBed } from '@angular/core/testing';

import { ProfessorResolver } from './professor.resolver';
describe('ProfessorResolver', () => {
  let resolver: ProfessorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfessorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
