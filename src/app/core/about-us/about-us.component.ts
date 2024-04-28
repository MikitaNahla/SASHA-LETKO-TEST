import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoTeammateComponent} from "./info-teammate/info-teammate.component";
import {InfoTeammate} from "../types/InfoTeammate";
import {ImageService} from "../services/image.service";
import {ThemeSwitcherService} from "../services/theme-switcher.service";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, InfoTeammateComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  description: string = "LISSAPPV was created specially for help you to study different aspects of subject area" +
    " of “ART”.  This service provides some functionality that makes your studying more interesting and recognizable. ";

  team: InfoTeammate[] = [
    {
      imgName : '',
      fullName : 'Daniil Halushka',
      description: "Daniil is a Kotlin developer. He likes reading books and jokes about ballers." +
        " So in our team he is responsible for I don’t know, maybe knowledge base, maybe not, I don’t know." +
        " Maybe testing.\n"
    },
    {
      imgName : '',
      fullName : 'Dmitry Zayats',
      description: "Dmitry Zayats is a C# developer. He likes jokes about patsany full rush B and cross fires." +
        " Dimka is a heart of team. He always kind and fair. Dimka is responsible for knowledge base."
    },
    {
      imgName : '',
      fullName : 'Denis Koltovich',
      description: "Denis Koltovich is a back-end developer. He is like a kitty in our team." +
        " But he is hardworking like an ant. Denis is a smile of our project." +
        " He is responsible for the server and API."
    },
    {
      imgName : '',
      fullName : 'Alexander Letko',
      description: "Alexander is a front-end developer. To our little happiness and big regrets we have such" +
        " person like Sasha Letko. He is a like a rudiment in our team. He is a professional in his sphere," +
        " but he has so dirty mind. He is responsible for web application and some kind of design."
    },
    {
      imgName : '',
      fullName : 'Mikita Nahla',
      description: "This is the person who wrote this text. So, he doesn’t know what to write here," +
        " so he can say he is responsible for web application and design."
    },
    {
      imgName : '',
      fullName : 'Vladislav Smolnik',
      description: "Vladislav is a Back-end developer. He LIKES Python and it’s libraries VERY MUCH so" +
        " he wants to become data analyst in future. He is responsible for the server and API."
    }
  ];

  constructor(
    public imageService: ImageService,
    private themeSwitcherService: ThemeSwitcherService
  ) {
  };

}
