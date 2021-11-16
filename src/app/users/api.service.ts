import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  // Authorization': 'Bearer key3GnfHvdYoWedr5'
header =new HttpHeaders({
  'Authorization': 'Bearer key3GnfHvdYoWedr5'
})
  url= 'https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users';
  
  
  addUser(data){
   return this.httpClient.post(this.url,data, {headers:this.header})
  }
  getAllUser(){
  return  this.httpClient.get(this.url, {headers:this.header})
  }
}

