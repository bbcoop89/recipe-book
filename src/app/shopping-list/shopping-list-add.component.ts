import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    // changes.item.currentValue === null ? this.isAdd = true : this.isAdd = false;
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null}
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const NEW_INGREDIENT = new Ingredient(ingredient.name, ingredient.amount);
    if(!this.isAdd) {
      this.sls.editItem(this.item, NEW_INGREDIENT);
      this.onClear();
    } else {
      this.item = NEW_INGREDIENT;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
