import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RndNumService {
  /**
   * Returns an Integer number within the specified (inclusive) range.
   * @param min Minimum number to be returned (inclusive)
   * @param max Maximum number to be returned (inclusive)
   */
  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  constructor() { }
}
