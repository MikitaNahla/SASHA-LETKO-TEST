import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from '../types/InfoCard';
import { InfoItemComponent } from './components/info-item/info-item.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, InfoItemComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  infoCards: InfoCard[][] = [
    [
      {
        text: 'Find the things you are interested in',
        imageSrc: 'eye.png',
      },
      {
        text: 'Filter the information by different tags',
        imageSrc: 'papers.png',
      },
      {
        text: 'Discover new things',
        imageSrc: 'bulb.png',
      },
    ],
    [
      {
        text: 'Generate new images',
        imageSrc: 'zip.png',
      },
      {
        text: 'Check the corectness of pictures',
        imageSrc: 'datagramm.png',
      },
      {
        text: 'Make conclusions by your work',
        imageSrc: 'computer.png',
      },
    ],
  ];
}
