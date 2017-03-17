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
  randomQuote = '';
  // products = [{
  //   "_id": "58cb5b1cb044710af4dba38f",
  //   "barcode": "211231231",
  //   "name": "Coca",
  //   "stock": "10",
  //   "__v": 0
  // },
  // {
  //   "_id": "58cb5e74264ce9bab4817542",
  //   "barcode": "211231231",
  //   "name": "Coca",
  //   "stock": "10",
  //   "__v": 0
  // }];
  products :any[]

  constructor(private http: Http) {
    this.getAllProducts();
  }



  saveProduct() {
    this.http.get('http://localhost:8080/saveProduct', {headers : this.getHeaders()})
    .map(res => res.text())
    .subscribe(
      data =>{ this.randomQuote = data
      console.log(this.randomQuote)
    },
      err => this.logError(err),
      // () => console.log('User created')
    );

  }
  getAllProducts() {
      // this.http.get('http://localhost:8080/getAllProducts', {headers : this.getHeaders()})
      // .map(res => res.text())
      // .subscribe(
      // //  data => { this.products = data
      // },
      //   err => this.logError(err),
      //   // () => console.log('User created')
      // );
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    return headers;
  }

  logError(err : String) {
  console.error('There was an error: ' + err);
  }
};
