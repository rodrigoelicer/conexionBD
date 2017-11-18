import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  rows: any = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getUser().subscribe(rows => {
      this.rows = rows[0];
      console.log(rows[0]);
    });
  }

  texto = "Mauro";

  alerting(){
    alert("Esto es una alerta");
    }
}
