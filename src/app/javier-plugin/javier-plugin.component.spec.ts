import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavierPluginComponent } from './javier-plugin.component';

describe('JavierPluginComponent', () => {
  let component: JavierPluginComponent;
  let fixture: ComponentFixture<JavierPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavierPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavierPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
