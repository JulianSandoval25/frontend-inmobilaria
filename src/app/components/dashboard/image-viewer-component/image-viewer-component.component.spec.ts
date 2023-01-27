import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerComponentComponent } from './image-viewer-component.component';

describe('ImageViewerComponentComponent', () => {
  let component: ImageViewerComponentComponent;
  let fixture: ComponentFixture<ImageViewerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageViewerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
