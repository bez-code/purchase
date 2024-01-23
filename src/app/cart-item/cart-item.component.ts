import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartItemInterface } from '../shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: ShoppingCartItemInterface;
  @Output() onDelete = new EventEmitter<number>()
  @Output() onCountUpdated = new EventEmitter<ShoppingCartItemInterface>()
  @Output() onRefresh = new EventEmitter()

  add() {
    const currentCount: number = this.item.count
    if (this.item != null) {
      this.item.count = currentCount + 1
    }
    this.onRefresh.emit();
    this.onCountUpdated.emit(this.item)
  }

  sub() {
    const currentCount: number = this.item.count
    if (this.item != null) {
      this.item.count = currentCount > 0 ? (currentCount - 1) : 0
    }
    this.onRefresh.emit()
    this.onCountUpdated.emit(this.item)
  }

  del(itemId?: number) {
    this.onDelete.emit(itemId)
    this.onRefresh.emit()
  }

}
