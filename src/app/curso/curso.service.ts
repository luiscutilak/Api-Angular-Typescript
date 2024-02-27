import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL - onde vou ter acesso aos meus arquivos php(alterar, cadastrar etc...)

  url = "http://localhost/api/php/";

  //Vetor - armazena dados
  vetor:Curso[] = [];



  constructor(private http: HttpClient) { }

  //Obter todos os cursos 
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res:any) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }
}
