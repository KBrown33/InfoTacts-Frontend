import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ifArr: string[] = Array(10).fill('contacts');
}
