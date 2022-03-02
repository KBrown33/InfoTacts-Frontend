import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  data: any= {
    name:'',
    email:'',
    userGroup:'',
    address:'',
    number:''
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addContact(): void{
    this.http.post('http://localhost:8081/api/users/',this.data).subscribe(response =>{
      console.log(response)
            })
  }
}
