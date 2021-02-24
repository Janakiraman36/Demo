import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  posts:any[] = [];

  constructor(private http:HttpClient){
    this.http.get('https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY')
    .subscribe((Response:any) =>{
      const sentry_objects = JSON.stringify(Response.sentry_objects);
      this.posts = Response.sentry_objects;
    })
  }
 
  ngOnInit(): void {
  }
}

