import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookedflightsPage } from './bookedflights.page';

describe('BookedflightsPage', () => {
  let component: BookedflightsPage;
  let fixture: ComponentFixture<BookedflightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedflightsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookedflightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
