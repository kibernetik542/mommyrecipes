import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { shoppingListReducer } from "./shopping-list/store/shopping-list.reducers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
