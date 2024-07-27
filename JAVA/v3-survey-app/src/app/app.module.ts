import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, DatePipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ShareModule } from '@ngx-share/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { REDUCER_TOKEN } from './store/app.reducer';
import { environment } from '../environments/environment';
import { en_US, NgZorroAntdModule, NZ_I18N, NZ_ICONS } from 'ng-zorro-antd';
import { CommonService } from './common.service';
import { SurveyLibModule } from 'survey-lib';
import { SurveyResponseComponent } from './survey-response/survey-response.component';
import { PagesService } from './pages.service';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
    SurveyResponseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    NgZorroAntdModule,
    SurveyLibModule,

  ],
  exports: [
    NgZorroAntdModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    CommonService,
    AsyncPipe,
    PagesService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
