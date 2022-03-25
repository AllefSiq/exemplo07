import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos
  public VetorCursos!:Curso[];
  public curso!: Curso;
  public id!:number;
  public inputNomeCurso:string = "";
  public inputValorCurso:number = 0;
  public inputAreaCurso:string = "";

  
  
  //Constructor
  constructor(private servico:CursosService) { }


  //Iniocializacao
  ngOnInit(){
    this.id = -1
    this.VetorCursos = this.servico.listar();

  }

  
  Cadastro(){


    if (this.inputNomeCurso != "" && this.inputAreaCurso != "" && this.inputValorCurso != 0) {
      this.curso = new Curso(
        this.inputNomeCurso,
        this.inputValorCurso,
        this.inputAreaCurso
      );;
      this.servico.cadastrar(this.curso)
      this.inputNomeCurso = ""
      this.inputValorCurso = 0
      this.inputAreaCurso = ""
      
    }else{
    alert("Preencha todos os campos")
  }
  }
  excluir(id: number){
  this.servico.excluir(id)
  this.id = -1
  }

  alterar(id:number){

    this.id = id;
    this.curso = new Curso(
      this.inputNomeCurso = this.VetorCursos[id].nomeCurso,
      this.inputValorCurso = this.VetorCursos[id].valorCurso,
      this.inputAreaCurso = this.VetorCursos[id].areaCurso
    )
    
  }

  atualizar(){
    alert(this.id)
    this.servico.alterar(this.id,this.curso)
  }

}
