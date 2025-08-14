import { Component, Input } from '@angular/core';
import {
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonHeader, IonToolbar],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() name = '';
  @Input() level = '';
  @Input() avatar = '';
}
