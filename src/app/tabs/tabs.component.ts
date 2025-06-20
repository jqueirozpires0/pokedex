import { Component } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search, starOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs],
})
export class TabsComponent {

  constructor() {
    addIcons({ library, playCircle, radio, search, starOutline, phonePortraitOutline });
  }

  ngOnInit() { }

}
