import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SurveyComponent} from './survey/survey.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'feedback/:feedbackIdentifier', component: SurveyComponent},
  {path: 'feedback/:feedbackIdentifier/:respondentIdentifier', component: SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
