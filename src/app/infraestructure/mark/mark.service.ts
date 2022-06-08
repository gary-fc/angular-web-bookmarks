import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarkGateway } from 'src/app/domain/models/gateway/MarkGateway';
import { IMark } from 'src/app/domain/models/mark/IMark';

@Injectable({
  providedIn: 'root',
})
export class MarkService implements MarkGateway {
  getMarks(): IMark[] {
    let marks: IMark[] = []
    if (JSON.parse(localStorage.getItem('marks')!) != null){
      console.log(JSON.parse(localStorage.getItem('marks')!))
      marks = JSON.parse(localStorage.getItem('marks')!);
    }
    return marks;
  }

  constructor() {}
}
