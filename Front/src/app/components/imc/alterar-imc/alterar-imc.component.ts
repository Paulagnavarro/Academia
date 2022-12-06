import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Imc } from "src/app/Models/Imc";

@Component({
  selector: "app-alterar-imc",
  templateUrl: "./alterar-imc.component.html",
  styleUrls: ["./alterar-imc.component.css"],
})
export class AlterarImcComponent implements OnInit {
  id!: number;
  nomeA!: string;
  nascimentoAId!: number;;
  altura!: number;;
  peso!: number;
  calculoImc!: number;
  classificacao!: string;
  imc!: Imc;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        this.id = id;
        this.http
          .get<Imc>(`https://localhost:5001/api/alterar/buscar/${id}`)
          .subscribe({
            next: (imc) => {
              this.nomeA = imc.nomeA?.nome!;
              this.nascimentoAId = imc.nascimentoAId?.nascimento!;
              this.altura = imc.altura!;
              this.peso = imc.peso!;
              this.calculoImc = imc.calculoImc!;
              this.classificacao = imc.classificacao!;
              this.imc = imc;
            },
          });
      }
    });
  }

  cadastrar(): void {
    this.imc.nomeA = this.nomeA;
    this.imc.nascimentoAId = this.nascimentoAId;
    this.imc.altura = this.altura;
    this.imc.peso = this.peso;
    this.imc.calculoImc = this.calculoImc;
    this.imc.classificacao = this.classificacao;
    

    this.http
      .put<Imc>("https://localhost:5001/api/imc/alterar", this.imc)
      .subscribe({
        next: (imc) => {
          this._snackBar.open("Alterado cadastro", "Ok!", {
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

