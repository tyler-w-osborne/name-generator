import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSignupComponent } from './interest-signup.component';

describe('InterestSignupComponent', () => {
  let component: InterestSignupComponent;
  let fixture: ComponentFixture<InterestSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
