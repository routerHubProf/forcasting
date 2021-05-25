import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareScenarioComponent } from './compare-scenario.component';

describe('CompareScenarioComponent', () => {
  let component: CompareScenarioComponent;
  let fixture: ComponentFixture<CompareScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
