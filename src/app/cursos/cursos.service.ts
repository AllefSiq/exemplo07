import { Injectable } from '@angular/core';
import { Curso } from './Curso';


// Acesso total do servico
@Injectable({
  providedIn: 'root'
})

//Classe
export class CursosService {

  //Construtor
  constructor() { }

  //Vetor de cursos
  private vetorCursos:Curso[] = [
    new Curso("Angular", 800, "Desenvolvimento"),
    new Curso("PHP", 590, "Desenvolvimento"),
    new Curso("Photoshop", 470, "Design")

  ];

  //Cadastro de cursos
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso)
  }

  //Selecao de cursos

  public listar(){
    return this.vetorCursos
  }

  //Alteracao de cursos


  public alterar(id:number,curso:Curso) {
    this.vetorCursos[id] = curso
  }

  //Exclusao de cursos


  public excluir(id:number,) {
    this.vetorCursos.splice(id,1)
    
  }

}
