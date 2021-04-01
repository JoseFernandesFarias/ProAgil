import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : any = [];
  imagemLargura: number = 50;
  imagemMargem: number = 2;
  mostrarImagem : boolean = false;
  textoBotao: string = "Mostrar Imagens";
  filtroLista: string = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }
  mostraImagens()
  {
      this.mostrarImagem = !this.mostrarImagem;
      if(this.textoBotao == "Mostrar Imagens")
      {
          this.textoBotao = "Apagar Imagens";
      }
      else
      {
        this.textoBotao = "Mostrar Imagens";
      }
  }

  getEventos(){
      this.http.get('http://localhost:5000/WeatherForecast').subscribe(
        Response =>{
          this.eventos = Response;
        },
        error => {
          console.log(error);
        }
      );
  }

}
