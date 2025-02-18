import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }
  bgSecondary:string = "rgb(255, 195, 161)"
  bgPrimary:string = "rgb(255, 255, 255)"
  bgBtn:string = "rgb(255, 130, 68)"
  fontTitle:string = "pacifico"
  fontText:string = "poppins"
}
