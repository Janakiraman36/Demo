import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
  ngOnInit(){
  }

}

// this.http.get('https://jsonplaceholder.typicode.com/comments')
//     .subscribe((Response:any)=>{
//       this.comments = Response;
//       console.log(Response);
//     });
