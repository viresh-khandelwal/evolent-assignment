import { TestBed, inject } from '@angular/core/testing';

import { ContactsHttpService } from './contacts-http.service';

describe('ContactsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsHttpService]
    });
  });

  it('should be created', inject([ContactsHttpService], (service: ContactsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
