import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";

import { HomeScreenComponent } from './home-screen.component';

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
  let fixture: ComponentFixture<HomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [HomeScreenComponent],
      imports: [HomeScreenComponent, NoopAnimationsModule, RouterTestingModule] // Use this for testing without actual animations.
      // Use BrowserAnimationsModule if you want to test with animations enabled
      // imports: [BrowserAnimationsModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
