import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackBagPage } from './track-bag.page';

describe('TrackBagPage', () => {
  let component: TrackBagPage;
  let fixture: ComponentFixture<TrackBagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackBagPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackBagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
