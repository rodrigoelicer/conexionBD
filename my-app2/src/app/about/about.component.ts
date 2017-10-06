import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  user: any = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getUser().subscribe(user => {
    this.user = user;
    });
  }

  texto = "Mauro";

  alerting(){
	  alert("Esto es una alerta");
    }
}
