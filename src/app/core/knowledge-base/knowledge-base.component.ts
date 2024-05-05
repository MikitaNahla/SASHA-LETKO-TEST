import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageService} from "../services/image.service";
import {Tile} from "../types/Tile";
import {MasonryOptions} from "../types/MasonryOptions";
import {NgxMasonryModule} from "ngx-masonry";
import {Router} from "@angular/router";

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  imports: [
    CommonModule,
    NgxMasonryModule,
  ],
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class KnowledgeBaseComponent implements OnInit {
  public readonly masonryOptions: MasonryOptions = {
    gutter: 5,
  };

  private chosenFlags: Set<string> = new Set();

  private readonly flags: string[] = ['Author', 'Style', 'Name'];

  public isShowingMenu: boolean = false;

  /*test values of pictures*/
  private tiles: Tile[] = [
    {
      id: 0,
      imgUrl: '',
      imgName: 'portrait',
    },
    {
      id: 1,
      imgUrl: '',
      imgName: 'cry',
    },
    {
      id: 2,
      imgUrl: '',
      imgName: 'fork',
    },
    {
      id: 3,
      imgUrl: '',
      imgName: 'mona lisa',
    },
    {
      id: 4,
      imgUrl: '',
      imgName: 'more',
    },
    {
      id: 5,
      imgUrl: '',
      imgName: 'night',
    },
  ];

  constructor(
    public imageService: ImageService,
    private router: Router,
  ) { };

  ngOnInit(): void { };

  public navigateToPicturePage(id: number) {
     let navigate: Promise<boolean> = this.router.navigate(['knowledgeBase', id])
  }

  public toggleMenu() {
    this.isShowingMenu = !this.isShowingMenu;
  };

  public addFlag(tag: string): void {
    this.chosenFlags.add(tag);
  };

  public eraseFlag(tag: string): void {
    this.chosenFlags.delete(tag);
  }

  public getChosenFlags(): Set<string> {
    return this.chosenFlags;
  };

  public getFlags(): string[] {
    return this.flags
  }

  public getTiles(): Tile[] {
    return this.tiles;
  }

}
