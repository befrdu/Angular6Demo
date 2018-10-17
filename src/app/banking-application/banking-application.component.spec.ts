import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingApplicationComponent } from './banking-application.component';

describe('BankingApplicationComponent', () => {
  let component: BankingApplicationComponent;
  let fixture: ComponentFixture<BankingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
