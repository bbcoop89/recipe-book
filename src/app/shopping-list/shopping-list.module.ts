import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {FormsModule} from "@angular/forms";
import {SHOPPING_LIST_ROUTING} from "./shopping-list.router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        SHOPPING_LIST_ROUTING
    ]
})
export class ShoppingListModule { }
