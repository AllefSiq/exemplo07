import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos
  public VetorCursos!:Curso[];
  public curso!: Curso;
  private id!:number;
  public inputNomeCurso!: string;
  public inputValorCurso!: number;
  public inputAreaCurso!: string;

  
  
  //Constructor
  constructor(private servico:CursosService) { }


  //Iniocializacao
  ngOnInit(){
    this.VetorCursos = this.servico.listar();

  }

  Cadastro(){
    this.curso = new Curso(
      this.inputNomeCurso,
      this.inputValorCurso,
      this.inputAreaCurso
    );;
    this.servico.cadastrar(this.curso)
  }

}
