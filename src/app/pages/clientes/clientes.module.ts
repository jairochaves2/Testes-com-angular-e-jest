import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientesComponent } from "./clientes.component";
import { ClientesService } from "./clientes.service";

@NgModule({
  imports: [CommonModule],
  exports: [ClientesComponent],
  declarations: [ClientesComponent],
  providers: [ClientesService],
})
export class ClientesModule {}
