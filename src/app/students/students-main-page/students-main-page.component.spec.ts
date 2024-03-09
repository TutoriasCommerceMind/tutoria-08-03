import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMainPageComponent } from './students-main-page.component';

describe('StudentsMainPageComponent', () => {
  let component: StudentsMainPageComponent;
  let fixture: ComponentFixture<StudentsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
