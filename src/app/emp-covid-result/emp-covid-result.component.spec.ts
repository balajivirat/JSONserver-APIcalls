import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCovidResultComponent } from './emp-covid-result.component';

describe('EmpCovidResultComponent', () => {
  let component: EmpCovidResultComponent;
  let fixture: ComponentFixture<EmpCovidResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCovidResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCovidResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
