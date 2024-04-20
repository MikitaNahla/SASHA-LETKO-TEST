import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  getImage(name: string, extension: string) {
    return `assets/images/${name}.${extension}`;
  }
}
