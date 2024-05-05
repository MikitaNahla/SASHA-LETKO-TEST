import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  tags = []

  constructor() { }

  public getTags() {
    return this.tags;
  }
}
