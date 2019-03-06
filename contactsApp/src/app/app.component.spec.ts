import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
class ContactsHttpService{
  getContacts() {
    let contacts: BehaviorSubject<any> = new BehaviorSubject({});
    contacts.next([
      {
        "firstName": "viresh",
        "lastName": "khandelwal",
        "phone": "7263962793",
        "email": "vireshkhandelwal93@gmail.com",
        "status": "active"
      }
    ]
    );
    return contacts;
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should get contacts', async(() => {
    let contactsHttpService = new ContactsHttpService();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    spyOn(contactsHttpService,'getContacts').and.returnValue(true);;
    expect(contactsHttpService.getContacts).toHaveBeenCalled();
  }));
});
