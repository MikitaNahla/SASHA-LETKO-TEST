import {Component, Input} from '@angular/core';
import {InfoTeammate} from "../../types/InfoTeammate";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-info-teammate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-teammate.component.html',
  styleUrls: ['./info-teammate.component.scss']
})
export class InfoTeammateComponent {
  @Input()
  info!: InfoTeammate;
}
