import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoalertComponent } from './infoalert.component';

describe('InfoalertComponent', () => {
  let component: InfoalertComponent;
  let fixture: ComponentFixture<InfoalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoalertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
