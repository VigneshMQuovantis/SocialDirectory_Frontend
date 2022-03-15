import { Component, Inject , OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA,MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-component',
  templateUrl: './snackbar-component.component.html',
  styleUrls: ['./snackbar-component.component.scss']
})
export class SnackbarComponentComponent implements OnInit {

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data:any,public snackBarRef:MatSnackBarRef<SnackbarComponentComponent>) { }

  ngOnInit(): void {
  }

}
