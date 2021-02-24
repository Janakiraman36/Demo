import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.css']
}) 
export class Edit1Component implements OnInit {
  edits:any[] = [];
  id:any;
  absolute_magnitude_h = '';
  designation = '';
  id1 = '';
  link = '';
  name = '';
  nasa_jpl_url = ''; 
  kilometerMin = '';
  kilometerMax = '';

  constructor(public activatedRoute:ActivatedRoute,
    private http:HttpClient){
    
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if( params.id ){
        this.id = params.id
      }
    });
    this.comment();
    
  }
 comment(){
  this.http.get('https://api.nasa.gov/neo/rest/v1/neo/'+this.id+'?api_key=DEMO_KEY')
  .subscribe((Response:any) =>{

    this.absolute_magnitude_h = Response.absolute_magnitude_h;
    this.designation = Response.designation;
    this.id = Response.id;
    this.kilometerMin = Response.estimated_diameter.kilometers.estimated_diameter_min;
    this.kilometerMax = Response.estimated_diameter.kilometers.estimated_diameter_max;
    this.link = Response.links.self;
    this.name = Response.name;
    this.nasa_jpl_url = Response.nasa_jpl_url;
  });
 }

}
