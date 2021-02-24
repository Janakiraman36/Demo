import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  close_approach_count = '';
  last_updated = '';
  nasa_jpl_url = '';
  near_earth_object_count = '';
  source = '';

  constructor(private http:HttpClient) { 
    this.http.get('https://api.nasa.gov/neo/rest/v1/stats?api_key=DEMO_KEY')
    .subscribe((Response:any) =>{
      this.close_approach_count = Response.close_approach_count;
      this.last_updated = Response.last_updated;
      this.nasa_jpl_url = Response.nasa_jpl_url;
      this.near_earth_object_count = Response.near_earth_object_count;
      this.source = Response.source;
    })
  }

  ngOnInit(): void {
  }

}
