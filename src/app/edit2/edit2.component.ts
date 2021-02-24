import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.css']
})
export class Edit2Component implements OnInit {
  edits:any[] = [];
  id:any;
  absolute_magnitude = '';
  designation = '';
  spkId = '';
  url_nasa_details = '';
  year_range_min = '';
  year_range_max = '';
  links = '';


  constructor(public activatedRoute:ActivatedRoute,
               private http:HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if( params.id ) {
        this.id = params.id;
      }
    });
    this.edit();
  }
  edit(){
    this.http.get('https://api.nasa.gov/neo/rest/v1/neo/sentry/'+this.id+'?api_key=DEMO_KEY')
    .subscribe((Response:any) =>{

      this.absolute_magnitude = Response.absolute_magnitude;
      this.designation = Response.designation;
      this.spkId = Response.spkId;
      this.url_nasa_details = Response.url_nasa_details;
      this.year_range_min = Response.year_range_min;
      this.year_range_max = Response.year_range_max;
      this.links = Response.links.self;
    });
  }

}
