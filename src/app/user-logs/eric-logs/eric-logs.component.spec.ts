import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EricLogsComponent } from './eric-logs.component';

describe('EricLogsComponent', () => {
  let component: EricLogsComponent;
  let fixture: ComponentFixture<EricLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EricLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EricLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
