import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Picture} from "../../types/Picture";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-picture-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.scss']
})
export class PicturePageComponent {

  public pictureInfo: null = null;

  public isShowingActions: boolean = false;

  private readonly actions: string[] = ['action', 'action', 'action'];

  public testPicture: Picture = {
    id: 0,
    description: 'This is test information about picture',
    name: 'cry',
    imgUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    public imgService: ImageService
  ) {
    this.route.params.subscribe(params => {
      /*Service api method to get info about chosen picture by id*/
    })
  };

  public showActions(): void {
    this.isShowingActions = !this.isShowingActions;
  }

  public getActions(): string[] {
    return this.actions;
  }
}
