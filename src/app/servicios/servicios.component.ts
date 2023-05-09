import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })

export class ServiciosComponent {
  url:string="http://npinti.ddns.net:9008/api/";
  constructor(private http:HttpClient){}

  obtenerDatos():Observable<any>
  {
    return this.http.get<any>('./assets/data.json');
  }
}






// parte vieja
// @Component({
//   selector: 'app-servicios',
//   templateUrl: './servicios.component.html',
//   styleUrls: ['./servicios.component.css']
// })
// export class ServiciosComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }