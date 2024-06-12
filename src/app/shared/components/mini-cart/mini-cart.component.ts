import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../models/models';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-mini-cart',
  standalone: true,
  imports: [],
  templateUrl: './mini-cart.component.html',
  styleUrl: './mini-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCartComponent {

  basketItems = this.basketService.getBasketItems();
  basketTotalPrice = this.basketService.basketTotalPrice;

  constructor(
    private basketService: BasketService
  ) {

  }

  removeFromCart(product: Product) {
    this.basketService.removeItem(product);
  }

}
