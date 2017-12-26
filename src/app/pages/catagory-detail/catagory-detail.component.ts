import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory-detail',
  templateUrl: './catagory-detail.component.html',
  styleUrls: ['./catagory-detail.component.scss']
})
export class CatagoryDetailComponent implements OnInit {
  flag: boolean = false;

  startTime = new Date(Date.parse('2017-12-21T00:00:00')).getTime();
  endTime = new Date(Date.parse('2017-12-22T10:56:00')).getTime();



  constructor() { }

  ngOnInit() {

  }

}
