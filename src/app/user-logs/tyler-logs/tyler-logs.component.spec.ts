import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TylerLogsComponent } from './tyler-logs.component';

describe('TylerLogsComponent', () => {
  let component: TylerLogsComponent;
  let fixture: ComponentFixture<TylerLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TylerLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TylerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
