import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/models';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [

  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  constructor(
    private basketService: BasketService
  ) {

  }

  addToCard(): void {
    if (this.product.added) {
      return;
    }
    this.product.added = true;
    this.basketService.addItem(this.product);
  }
}
