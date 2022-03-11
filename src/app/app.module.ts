import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ClientesComponent } from "./pages/clientes/clientes.component";
import { ClientesModule } from "./pages/clientes/clientes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
