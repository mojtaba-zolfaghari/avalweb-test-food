import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductComponent } from '../shared/components/product/product.component';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductComponent,
    NgTemplateOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent {

  products$ = this.apiService.getProduct();

  constructor(
    private apiService: ApiService
  ) {

  }

}
