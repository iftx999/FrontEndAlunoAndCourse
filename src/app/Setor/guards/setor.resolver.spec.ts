import { TestBed } from '@angular/core/testing';

import { SetorResolver } from './setor.resolver';

describe('SetorResolver', () => {
  let resolver: SetorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SetorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
