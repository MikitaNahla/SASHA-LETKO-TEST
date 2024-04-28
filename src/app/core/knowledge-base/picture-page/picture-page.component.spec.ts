import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePageComponent } from './picture-page.component';

describe('PicturePageComponent', () => {
  let component: PicturePageComponent;
  let fixture: ComponentFixture<PicturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicturePageComponent]
    });
    fixture = TestBed.createComponent(PicturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
