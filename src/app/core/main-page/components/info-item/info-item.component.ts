import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from 'src/app/core/types/InfoCard';

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
})
export class InfoItemComponent {
  @Input()
  info!: InfoCard;
}
