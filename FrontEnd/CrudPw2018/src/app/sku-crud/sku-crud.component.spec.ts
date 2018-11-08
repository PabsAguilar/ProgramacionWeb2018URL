import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuCRUDComponent } from './sku-crud.component';

describe('SkuCRUDComponent', () => {
  let component: SkuCRUDComponent;
  let fixture: ComponentFixture<SkuCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
