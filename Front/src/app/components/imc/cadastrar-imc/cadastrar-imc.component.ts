import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Imc } from "src/app/Models/Imc";
import { Usuario } from "src/app/Models/Usuario";

@Component({
  selector: "app-cadastrar-imc",
  templateUrl: "./cadastrar-imc.component.html",
  styleUrls: ["./cadastrar-imc.component.css"],
})
export class CadastrarImcComponent implements OnInit {
  id!: number;
  nomeAId!: number;
  usuarios!: Usuario[];
  nascimentoAId!: number;
  altura!: number;
  peso!: number;
  calculoImc!: number;
  classificacao!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.http
      .get<Usuario[]>("https://localhost:5001/api/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        },
      });
  }

  cadastrar(): void {
    let imc: Imc = {
      nomeAId: this.nomeAId,
      nascimentoAId: this.nascimentoAId,
      altura: this.altura,
      peso: this.peso,
      calculoImc: this.calculoImc,
      classificacao: this.classificacao
    };

    this.http
      .post<Imc>("https://localhost:5001/api/imc/cadastrar", imc)
      .subscribe({
        next: (imc) => {
          this._snackBar.open("IMC cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/imc/listar"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!", error);
        },
      });
  }
}

