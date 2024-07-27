import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private readonly campaignSurveyUrl: string;
  private readonly openSurveyUrl: string;
  private readonly submitResponseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.campaignSurveyUrl = environment.baseUrl + '/public/survey/getSurvey';
    this.openSurveyUrl = environment.baseUrl + '/public/survey/getOpenSurvey';
    this.submitResponseUrl = environment.baseUrl + '/public/response/submit';
  }


  private static getResultFromResponse(response: any) {
    return response.data.result;
  }


  private static getMessageFromResponse(response: any) {
    return response.data.result;
  }

  getCampaignSurvey(campaignIdentifier: string, respondentIdentifier): Observable<any> {
    return this.httpClient.get(this.campaignSurveyUrl, {
      params: new HttpParams().set('surveyIdentifier', campaignIdentifier)
        .append('respondentIdentifier', respondentIdentifier)
        .append('testMode', false + '')
    }).pipe(map(response => {
      return SurveyService.getResultFromResponse(response);
    }));
  }

  getOpenSurvey(surveyIdentifier: number): Observable<any> {
    return this.httpClient.get(this.openSurveyUrl, {
      params: new HttpParams().set('surveyIdentifier', '' + surveyIdentifier)
    }).pipe(map(response => SurveyService.getResultFromResponse(response)));
  }


  submitSurveyResponse(surveyResponse: any) {
    return this.httpClient
      .post(this.submitResponseUrl, surveyResponse, {})
      .pipe(map(response => SurveyService.getMessageFromResponse(response))) as Observable<string>;
  }
}
