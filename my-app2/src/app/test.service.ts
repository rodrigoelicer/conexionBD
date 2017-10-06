import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(private http: Http) { }

  getUser(){
  	return this.http.get('/api').map(res => res.json());
  }
}
