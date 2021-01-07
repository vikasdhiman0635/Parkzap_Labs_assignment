import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterservicesService {


  constructor(private http:HttpClient) { }

  savedata(data):Observable<{}>
  {
    let url="http://localhost:3000/employees/save";
    // let url="http://ec2-18-191-48-180.us-east-2.compute.amazonaws.com:3000/employees/save";
    return this.http.post<{}>(url,data);
  }

  getdatabyemail(email):Observable<any>
  {
    let url="http://localhost:3000/employees/getbyemail/"+email;
    // let url="http://ec2-18-191-48-180.us-east-2.compute.amazonaws.com:3000/employees/getbyemail/"+email;
    return this.http.get(url);
  }

}
