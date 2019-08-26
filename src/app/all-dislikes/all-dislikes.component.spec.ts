import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDislikesComponent } from './all-dislikes.component';

describe('AllDislikesComponent', () => {
  let component: AllDislikesComponent;
  let fixture: ComponentFixture<AllDislikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDislikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
