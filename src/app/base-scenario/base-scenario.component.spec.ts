import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseScenarioComponent } from './base-scenario.component';

describe('BaseScenarioComponent', () => {
  let component: BaseScenarioComponent;
  let fixture: ComponentFixture<BaseScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
