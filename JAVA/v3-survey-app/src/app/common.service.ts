import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CommonService {

  public changeBaseLayoutEvent: EventEmitter<number> = new EventEmitter();

  public baseLayout: number = 1;

}
