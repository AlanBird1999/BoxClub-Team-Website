import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevinLogsComponent } from './kevin-logs.component';

describe('KevinLogsComponent', () => {
  let component: KevinLogsComponent;
  let fixture: ComponentFixture<KevinLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KevinLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KevinLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
