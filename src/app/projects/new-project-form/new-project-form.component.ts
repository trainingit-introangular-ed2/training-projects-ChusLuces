import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { project } from '../projects.service';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input() public nameNewProject: string;
  @Input() public numProjects: number;
  @Input() public projects: project[];
  @Output() public guardarProyecto = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
