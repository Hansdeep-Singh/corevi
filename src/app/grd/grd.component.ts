import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grd',
  templateUrl: './grd.component.html',
  styleUrls: ['./grd.component.scss']
})
export class GrdComponent implements OnInit {

  constructor() { }

  grid: boolean = false;
  ngOnInit(): void {
  }
  onChange(value: boolean) {
    let nodeList = document.querySelectorAll("*");
    if (value) nodeList.forEach(element => element.classList.add("grid"));
    if (!value) nodeList.forEach(element => element.classList.remove("grid"));
  }

}
