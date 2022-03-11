import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { Cliente } from "./Clientes";

import { ClientesComponent } from "./clientes.component";
import { ClientesModule } from "./clientes.module";
import { ClientesService } from "./clientes.service";

class ClienteServiceMock {
  getClients(): Observable<Cliente[]> {
    const clientes: Cliente[] = [{ id: 1, nome: "José", sobrenome: "Sousa" }];
    return of(clientes);
  }
}
describe("ClientesComponent", () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesModule],
      providers: [
        {
          provide: ClientesService,
          useClass: ClienteServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should contain name José", () => {
    expect(component.clientes[0].nome).toBe("José");
  });
  it("should contain last name Sousa", () => {
    expect(component.clientes[0].sobrenome).toBe("Sousa");
  });
});
