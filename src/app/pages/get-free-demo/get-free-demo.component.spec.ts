import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFreeDemoComponent } from './get-free-demo.component';

describe('GetFreeDemoComponent', () => {
  let component: GetFreeDemoComponent;
  let fixture: ComponentFixture<GetFreeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFreeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
