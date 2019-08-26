import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLikesComponent } from './all-likes.component';

describe('AllLikesComponent', () => {
  let component: AllLikesComponent;
  let fixture: ComponentFixture<AllLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
