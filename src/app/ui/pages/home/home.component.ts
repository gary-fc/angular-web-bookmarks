import { Component, OnInit } from '@angular/core';
import { GetMarkUsecase } from 'src/app/domain/usecase/get-mark-usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _getMarkUsecase: GetMarkUsecase) { }

  ngOnInit(): void {
    this.getMarks();
  }

  getMarks(){
    console.log(this._getMarkUsecase.getMarks())
  }

}
