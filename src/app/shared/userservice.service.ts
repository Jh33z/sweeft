import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

constructor(private http: HttpClient){
}
api='http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/'
page = 1;
itemsPerPage = 20;
users(){
  return this.http.get<any>(`${this.api}${this.page}/${this.itemsPerPage}`)
}

}
