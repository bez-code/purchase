import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemInterface } from './shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'purchase';

  items: ShoppingCartItemInterface[] = []
  totalPrice: number = 0

  onDeleteEvent(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  onCountUpdatedEvent($event: ShoppingCartItemInterface) {
    const index = this.items.findIndex(item => item.id === $event.id)
    this.items[index] = $event;
  }

  refresh() {
    let sumPrice = 0;
    this.items.forEach(item => {
      const price = item.price ?? 0;
      sumPrice += (price * (item.count ?? 0));
    })
    this.totalPrice = sumPrice;
  }

  ngOnInit(): void {
    this.initCart()
  }

  private initCart() {
    this.items = [
      { id: 1, count: 1, image: 'assets/images/iphone.jpeg', name: 'Iphone 14 promax 128GB', price: 999 },
      { id: 2, count: 2, image: 'assets/images/iphone.jpeg', name: 'Iphone 14 pro 512GB', price: 1199 },
      { id: 3, count: 1, image: 'assets/images/iphone.jpeg', name: 'Iphone 15  128GB', price: 1399 }
    ];
    this.refresh();
  }


}
