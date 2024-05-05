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
    description: 'The Scream is an expressionist painting created by Edvard Munch in 1893.' +
      ' It depicts an angst-ridden figure with its mouth open in a scream, set against a dark and turbulent sky.' +
      ' The painting has become one of the most iconic and recognizable images in the history of art, and is often' +
      ' associated with existential anxiety and the human condition. It is currently held in the collection of the' +
      ' National Museum of Art, Architecture and Design in Oslo, Norway.',
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
