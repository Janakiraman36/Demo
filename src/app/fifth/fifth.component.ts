import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  Users:any[] = [];

  constructor(private http:HttpClient) { 
    this.http.get('https://api.nasa.gov/neo/rest/v1/feed?detailed=true&api_key=DEMO_KEY')
    .subscribe((Response:any) =>{
      // this.Users = Response;

      const near_earth_objects = JSON.stringify(Response.near_earth_objects);
      console.log('Data' + near_earth_objects);
      console.log(Response);
    })
  }

  ngOnInit(): void {
  }

}

// constructor(private http:HttpClient) { 
//   this.http.get('https://jsonplaceholder.typicode.com/users')
//   .subscribe((Response:any) =>{
//     this.Users = Response;
//   })
// }
