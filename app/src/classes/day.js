import { Color } from "./color";

export class Day {
  constructor(date) {
    this.completeDate = date;
    this.date = date.getDate();
    this.day = date.getDay();
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.color = Color(0, 0, 0, 1);
    this.description = '';
  }
}
