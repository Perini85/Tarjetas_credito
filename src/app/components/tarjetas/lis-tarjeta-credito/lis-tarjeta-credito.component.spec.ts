import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisTarjetaCreditoComponent } from './lis-tarjeta-credito.component';

describe('LisTarjetaCreditoComponent', () => {
  let component: LisTarjetaCreditoComponent;
  let fixture: ComponentFixture<LisTarjetaCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisTarjetaCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
