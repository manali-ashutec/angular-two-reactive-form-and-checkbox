import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SharedService {
  private singleVlaue = new BehaviorSubject<any>({});
  private multipleVlaue = new BehaviorSubject<any>({});

  constructor() {}
  singleApproval(message) {
    this.singleVlaue.next(message);
  }
  currentSingle(): Observable<any> {
    return this.singleVlaue.asObservable();
  }
  multipleApproval(message) {
    this.singleVlaue.next(message);
  }
  current(): Observable<any> {
    return this.singleVlaue.asObservable();
  }
}
