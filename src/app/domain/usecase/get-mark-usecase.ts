import { Injectable } from "@angular/core";
import { MarkGateway } from "../models/gateway/MarkGateway";
import { IMark } from "../models/mark/IMark";

@Injectable({providedIn:'root'})
export class GetMarkUsecase{
  constructor(private _markGateway: MarkGateway){}

  getMarks(){
    this._markGateway.getMarks();
  }
}
