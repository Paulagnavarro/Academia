import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  nascimento!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
    let usuario = Usuario {
      nome: this.nome,
      nascimento: this.nascimento,
    };
    this.http
    .post<usuario>("https://localhost:5001/api/usuario/cadastrar", usuario)
    .subscribe({
      next: (usuario) => {
        this._snackBar.open("Usuario cadastrado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/usuario/listar"]);
      },
      error: (error) => {
        console.error("Algum erro aconteceu!");
      },
    });
}
  }