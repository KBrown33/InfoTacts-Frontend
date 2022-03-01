import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data: any
  ngOnInit(): void {
    this.http.get('http://localhost:8081/api/users/').subscribe(response =>{
      this.data=response
    })
  }
  ifArr: string[] = Array(10).fill('contacts');

}
