import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanLogsComponent } from './alan-logs.component';

describe('AlanLogsComponent', () => {
  let component: AlanLogsComponent;
  let fixture: ComponentFixture<AlanLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlanLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlanLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
