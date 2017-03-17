import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Component({
  selector: 'home',
  templateUrl: 'app/view/home.html'

})

@Injectable()
export class HomeComponent{
  private baseUrl: string = 'http://localhost:8080';
  randomQuote = ''
  constructor(private http: Http) { }

  saveProduct() {
    this.http.get('http://localhost:8080/saveProduct', {headers : this.getHeaders()})
    .map(res => res.text())
    .subscribe(
      data => this.randomQuote = data,
      err => this.logError(err),
      () => console.log('User created')
    );

  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    return headers;
  }

  logError(err : String) {
  console.error('There was an error: ' + err);
  }
};
