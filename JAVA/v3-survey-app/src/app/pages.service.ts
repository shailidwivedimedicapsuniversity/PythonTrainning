import { EventEmitter, Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class PagesService implements OnInit, OnDestroy {

  private readonly surveyUrl: string = `${environment.baseUrl}/public/survey/getSurvey?`;
  public previousQuestion: EventEmitter<number> = new EventEmitter();
  public nextQuestion: EventEmitter<number> = new EventEmitter();
  public nextPageEvent: EventEmitter<string> = new EventEmitter();


  constructor(private httpClient: HttpClient) {
  }

  getSurvey(surveyIdentifier: number, respondentIdentifier, testMode) {
    return this.httpClient.get(this.surveyUrl, {
      params: new HttpParams().set('surveyIdentifier', '' + surveyIdentifier)
        .append('respondentIdentifier', respondentIdentifier)
        .append('testMode', testMode)
    }).pipe(map(response => {
      return PagesService.processResponse(response);
    }));
  }

  private static processResponse(response: any) {
    return response.data.result;
  }

  submitResponse(surveyResponse: any) {
    const url = environment.baseUrl + `/public/response/submit`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(url, surveyResponse, { headers });
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }
}
