import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public header = 'Inicio';
  public description = 'Número de proyectos';
  public numProyects = environment.projects.length;
  public counterClass = 'tag secondary';
  public formHidden = false;

  constructor() {}

  ngOnInit() {}
}
