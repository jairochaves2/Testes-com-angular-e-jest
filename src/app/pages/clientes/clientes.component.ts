import { Component, OnInit } from "@angular/core";
import { Cliente } from "./Clientes";
import { ClientesService } from "./clientes.service";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.clienteService.getClients().subscribe((clienteList) => {
      this.clientes = clienteList;
    });
  }
}
