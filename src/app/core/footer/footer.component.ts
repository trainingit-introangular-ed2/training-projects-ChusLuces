import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from '../../projects/notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public notes$;
  public ultimaAnotacion;

  constructor(private notificationsStore: NotificationsStoreService) {
    this.notificationsStore.select$().subscribe(x => (this.ultimaAnotacion = x.pop()));
    console.log('Ulitma anotacion:' + this.ultimaAnotacion);
  }
  ngOnInit() {}
}
