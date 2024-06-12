import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basketItems = signal<Product[]>([]);
  readonly basketTotalPrice = computed(() => this.basketItems().reduce((total, product) => total + ((product.quantity || 1) * product.price), 0));

  getBasketItems() {   
    return this.basketItems.asReadonly();
  }

  addItem(product: Product) {
    this.basketItems.update(items => [...items, product]);
  }

  removeItem(product: Product) {
    this.basketItems.update(items => items.filter(item => item.id !== product.id));
  }

  clearBasket() {
    this.basketItems.set([]);
  }
}
