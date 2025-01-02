import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverCardDateComponent } from './hover-card-date.component';

describe('HoverCardDateComponent', () => {
  let component: HoverCardDateComponent;
  let fixture: ComponentFixture<HoverCardDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverCardDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverCardDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
