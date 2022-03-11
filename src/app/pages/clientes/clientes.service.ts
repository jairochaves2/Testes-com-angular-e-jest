import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Cliente } from "./Clientes";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor() {}

  getClients(): Observable<Cliente[]> {
    const clientes: Cliente[] = [{ id: 1, nome: "João", sobrenome: "Silva" }];
    return of(clientes);
  }
}
