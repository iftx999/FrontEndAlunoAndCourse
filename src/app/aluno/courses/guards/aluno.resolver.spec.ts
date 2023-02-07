import { TestBed } from '@angular/core/testing';
import { AlunoResolver } from './aluno.resolver';

describe('AlunoResolver', () => {
  let resolver: AlunoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlunoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
