import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  descripcion = "";
  rows: any = [];

  constructor(private testService: TestService, private http: Http) { }

  ngOnInit() {
    this.testService.getOrdenes().subscribe(rows => {
      this.rows = rows;
    });
  }

  crearOrden() {
    return this.http.post('/api/crearOrden/', { descripcion: this.descripcion })
      .subscribe((res: Response) => {
        console.log(res)
        try {
          let response = res.json().body.result;
          this.ngOnInit();
          alert(response);
        }
        catch (err) {
          console.log(err)
          alert("Error")
        }
      })
  }

}
