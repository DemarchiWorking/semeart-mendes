import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRedeSocialComponent } from './nav-rede-social.component';

describe('NavRedeSocialComponent', () => {
  let component: NavRedeSocialComponent;
  let fixture: ComponentFixture<NavRedeSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRedeSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRedeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
