import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotactComponent } from './infotact.component';

describe('InfotactComponent', () => {
  let component: InfotactComponent;
  let fixture: ComponentFixture<InfotactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
