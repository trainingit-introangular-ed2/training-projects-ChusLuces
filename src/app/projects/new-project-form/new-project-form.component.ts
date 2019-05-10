import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { project } from '../projects.service';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public formGroup: FormGroup;
  @Input() public nameNewProject: string;
  @Input() public numProjects: number;
  @Input() public projects: project[];
  @Output() public guardarProyecto = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    const minimoNombre = 1;
    this.formGroup = this.formBuilder.group({
      projectname: [null, [Validators.required, Validators.minLength(minimoNombre)]]
    });
  }
  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
