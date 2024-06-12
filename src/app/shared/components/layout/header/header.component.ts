import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [

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
