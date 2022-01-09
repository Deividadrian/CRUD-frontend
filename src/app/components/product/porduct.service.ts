import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"

@Injectable({
  providedIn: 'root'
})
export class PorductService {

  constructor( private snapBar: MatSnackBar) {
  }

    showMenssge(msg: string): void {
      this.snapBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }
   
}
