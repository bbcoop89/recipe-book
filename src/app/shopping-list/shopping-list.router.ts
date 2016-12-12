import {ShoppingListComponent} from "./shopping-list.component";
import {RouterModule} from "@angular/router";

const SHOPPING_LIST_ROUTES = [
    { path: '', component: ShoppingListComponent }
];

export const SHOPPING_LIST_ROUTING = RouterModule.forChild(SHOPPING_LIST_ROUTES);