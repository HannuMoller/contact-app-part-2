import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  address: string;

  constructor() { }

  ngOnInit() {
  }

  public ok() {

  }
}
