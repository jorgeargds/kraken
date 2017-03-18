import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


@Component({
  selector : 'inventory',
  templateUrl : 'app/view/inventory.html'
})
export class InventoryComponent{

  private baseUrl: string = 'http://localhost:8080';
  products : any[];

  constructor(private http: Http) {
    this.getAllProducts();
  }

  getAllProducts() {
      this.http.get(`${this.baseUrl}/getAllProducts`, {headers : this.getHeaders()})
      .map(res => res.text())
      .subscribe(
        data => this.products = JSON.parse(data),
        err => this.logError(err),
        // () => console.log('User created')
      );
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    return headers;
  }

  logError(err : String) {
  console.error('There was an error: ' + err);
  }

}
