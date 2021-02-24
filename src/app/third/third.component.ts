import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  comments:any[] = [];

  constructor(private http:HttpClient) { 
    this.http.get('https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=DEMO_KEY')
    .subscribe((Response:any) =>{

      const near_earth_objects = Response.near_earth_objects;
      
      for(var i = 0; i < near_earth_objects.length; i++){
        this.comments.push(near_earth_objects[i]);
      }
    });
     
  }
 

  ngOnInit(): void {
  }

}

