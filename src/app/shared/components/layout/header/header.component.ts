import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import { MiniCartComponent } from '../../mini-cart/mini-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MiniCartComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  basketItems = this.basketService.getBasketItems();

  constructor(
    private basketService: BasketService
  ) {

  }

}
