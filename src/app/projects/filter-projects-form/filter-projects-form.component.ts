import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Input() public idProject: number;
  @Input() public nameProject: string;
  @Output() public getProjectById = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
