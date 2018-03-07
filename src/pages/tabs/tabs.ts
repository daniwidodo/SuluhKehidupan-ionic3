import { Component } from '@angular/core';

import { RenunganTeksPage } from '../renungan-teks/renungan-teks';
import { RenunganAudioPage } from '../renungan-audio/renungan-audio';
import { RenunganVideoPage } from '../renungan-video/renungan-video';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RenunganTeksPage;
  tab2Root = RenunganAudioPage;
  tab3Root = RenunganVideoPage;

  constructor() {

  }
}
