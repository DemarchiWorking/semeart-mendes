import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselProdutosComponent } from './carrousel-produtos.component';

describe('CarrouselProdutosComponent', () => {
  let component: CarrouselProdutosComponent;
  let fixture: ComponentFixture<CarrouselProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
