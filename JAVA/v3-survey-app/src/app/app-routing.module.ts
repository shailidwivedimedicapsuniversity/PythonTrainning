import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SurveyResponseComponent } from './survey-response/survey-response.component';


const routes: Routes = [
  { path: '', redirectTo: '/feedback', pathMatch: 'full' },
  {path: 'feedback/:surveyIdentifier', component: SurveyResponseComponent},
  {path: 'feedback/:surveyIdentifier/:respondentIdentifier',component: SurveyResponseComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
