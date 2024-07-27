import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SurveyService} from './survey.service';
import {ConversationalForm} from 'conversational-form';
import {ChatbotModel, SurveyPages, SurveyProperties, SurveyThemes} from '../models/chatbot.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  private feedbackIdentifier: any;
  private respondentIdentifier: any;
  public isSurveyRetrieveError = false;
  public surveyRetrieveError: string;
  public surveyPages: SurveyPages[];
  public surveyProperties: SurveyProperties;
  private surveyStartedAt: any;
  chatbotSurveyResponse = {};
  chatbotResponse = [];
  responseMetaInformation = {};
  @ViewChild('myCF', {static: true}) myCF: ElementRef;
  cf: any;

  constructor(private activatedRoute: ActivatedRoute, private surveyService: SurveyService) {
  }

  ngOnInit() {
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    this.myCF.nativeElement.style.height = `${height}px`;
    this.activatedRoute.paramMap.subscribe(params => console.log(params));
    this.feedbackIdentifier = this.activatedRoute.snapshot.params.feedbackIdentifier;
    this.respondentIdentifier = this.activatedRoute.snapshot.params.respondentIdentifier;
    if (this.respondentIdentifier != null) {
      this.surveyService.getCampaignSurvey(this.feedbackIdentifier, this.respondentIdentifier)
        .subscribe(response => {
          console.log(response);
          this.isSurveyRetrieveError = false;
          this.surveyPages = response.chatBotSurveyContent.surveyPages;
          this.surveyProperties = response.chatBotSurveyContent.surveyProperties;
          this.initializeConversationalForm(this.surveyPages);
        }, error1 => {
          console.log(error1);
          this.isSurveyRetrieveError = true;
          this.surveyRetrieveError = error1.error.detailedMessage;
        });
    } else {
      this.surveyService.getOpenSurvey(this.feedbackIdentifier)
        .subscribe(response => {
          console.log(response);
          this.isSurveyRetrieveError = false;
          this.surveyPages = response.chatBotSurveyContent.surveyPages;
          this.surveyProperties = response.chatBotSurveyContent.surveyProperties;
          this.initializeConversationalForm(this.surveyPages);
        }, error1 => {
          console.log(error1);
          this.isSurveyRetrieveError = true;
          this.surveyRetrieveError = error1.error.detailedMessage;
        });
    }
   // this.chatbotModel = {"surveyProperties":{"surveyThemes":{"backgroundColor":"#f2f3f5","primaryColor":"#37bfc9","primaryColorDark":"#048C96","textColorPrimary":"#ffffff","textColorSecondary":"#4a4a4a","primaryButtonTextColor":"#ffffff"},"isOmotoBrandingEnabled":true,"organizationLogo":"https://cdn.omoto.io/Omoto_circles_logo.png","surveyAttributes":{"npsLabels":{"leftLabel":"Unlikely","rightLabel":"Likely"}}},"surveyPages":[{"identifier":1587370144611,"id":"nps","tag":"fieldset","type":"Radio buttons","cf-input-placeholder":"Please select from above","cf-questions":"This is NPS question. The question text will appear above the Scale. And it is 10 scale rating.","cf-error":"This question is mandatory!","required":true,"children":[{"cf-label":"0","value":"0","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"1","value":"1","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"2","value":"2","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"3","value":"3","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"4","value":"4","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"5","value":"5","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"6","value":"6","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"7","value":"7","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"8","value":"8","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"9","value":"9","tag":"input","type":"radio","name":"nps-1587370144611"},{"cf-label":"10","value":"10","tag":"input","type":"radio","name":"nps-1587370144611"}]},{"identifier":1587370145361,"id":"choice","tag":"fieldset","type":"Checkboxes","cf-input-placeholder":"Please select from above","cf-questions":"Multiple choice question. The question text will appear above the options. Below are the options.","cf-error":"This question is mandatory!","required":false,"children":[{"cf-label":"Option 1","value":"Option 1","tag":"input","type":"checkbox","name":"choice-1587370145361"},{"cf-label":"Option 2","value":"Option 2","tag":"input","type":"checkbox","name":"choice-1587370145361"},{"cf-label":"Option 3","value":"Option 3","tag":"input","type":"checkbox","name":"choice-1587370145361"},{"cf-label":"Option 4","value":"Option 4","tag":"input","type":"checkbox","name":"choice-1587370145361"}]},{"identifier":1587371133644,"id":"rating","tag":"fieldset","type":"Radio buttons","cf-input-placeholder":"Please select from above","cf-questions":"This is rating question. The question text will appear above the choice. And it is 10 scale rating.","cf-error":"This question is mandatory!","required":false,"children":[{"cf-label":"1","cf-image":"https://omotostorage.blob.core.windows.net/survey-assets/star-72.png","value":"1","tag":"input","type":"radio","name":"rating-1587371133644"},{"cf-label":"2","cf-image":"https://omotostorage.blob.core.windows.net/survey-assets/star-72.png","value":"2","tag":"input","type":"radio","name":"rating-1587371133644"},{"cf-label":"3","cf-image":"https://omotostorage.blob.core.windows.net/survey-assets/star-72.png","value":"3","tag":"input","type":"radio","name":"rating-1587371133644"},{"cf-label":"4","cf-image":"https://omotostorage.blob.core.windows.net/survey-assets/star-72.png","value":"4","tag":"input","type":"radio","name":"rating-1587371133644"},{"cf-label":"5","cf-image":"https://omotostorage.blob.core.windows.net/survey-assets/star-72.png","value":"5","tag":"input","type":"radio","name":"rating-1587371133644"}]},{"identifier":1587371197177,"id":"short-text","tag":"input","type":"text","cf-input-placeholder":"Click here to write","name":"shorttext-1587371197177","minlength":0,"maxlength":50,"cf-questions":"This is short text question. The question text will appear above the choice. And it is 10 scale rating.","cf-error":"This question is mandatory!","required":false}]};
   //  this.surveyPages = this.chatbotModel.surveyPages;
   //  this.surveyProperties = this.chatbotModel.surveyProperties;
   //  this.initializeConversationalForm(this.surveyPages);
  }


  private initializeConversationalForm(surveyPages) {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        robotImage: this.surveyProperties.organizationLogo,
        showProgressBar: true,
        hideUserInputOnNoneTextInput: false,
        submitCallback: this.submitCallback.bind(this),
        preventAutoFocus: true,
        preventAutoAppend: true,
        animationsEnabled: true,
        loadExternalStyleSheet: false,
        flowStepCallback: this.flowCallback.bind(this),
      },
      tags: surveyPages
    });
    this.myCF.nativeElement.appendChild(this.cf.el);
    this.responseMetaInformation['startedAt'] = Date.now();
    this.responseMetaInformation['responseDate'] = Date.now();
    this.initializeSurveyTheme(this.surveyProperties.surveyThemes);
    if (this.surveyProperties.isOmotoBrandingEnabled) {
      this.initializePoweredByOmotoElement();
    }
    surveyPages.forEach((surveyPage, index) => {
      console.log(surveyPage.hasOwnProperty('id') && surveyPage.id === 'nps');
      if (surveyPage.hasOwnProperty('id') && surveyPage.id === 'nps') {
        this.initializeNPSNumericScaleLabels(index);
      }
    });
    this.cf.uiOptions = {
      controlElementsInAnimationDelay: 250,
      robot: {
        robotResponseTime: 2000,
        chainedResponseTime: 0
      },
      user: {
        showThinking: false,
        showThumb: false
      }
    };
  }


  flowCallback(dto, success, error) {
    console.log(dto);
    this.addResponse(dto);
    return success();
  }

  private addResponse(dto) {
    console.log(dto.tag);
    const surveyResponse = {};
    switch (dto.tag.id) {
      case 'nps':
      case 'rating':
        surveyResponse['question'] = dto.tag.questions[0];
        surveyResponse['questionType'] = dto.tag.id;
        surveyResponse['identifier'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['questionId'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['rating'] = dto.tag.value[0];
        this.chatbotResponse.push(surveyResponse);
        const cfListEl = document.getElementsByTagName('cf-list');
        if (cfListEl[0].classList.contains('nps-label-container-parent')) { cfListEl[0].classList.remove('nps-label-container-parent'); }
        break;

      case 'choice':
        surveyResponse['question'] = dto.tag.questions[0];
        surveyResponse['questionType'] = dto.tag.id;
        surveyResponse['identifier'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['questionId'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['choices'] = [];
        dto.tag.value.forEach((choice, index) => {
          let choices = {};
          console.warn(choice);
          choices['identifier'] = this.getQuestionIdentifier(dto.tag.name);
          choices['choiceId'] = index;
          choices['isChecked'] = true;
          choices['text'] = choice;
          surveyResponse['choices'].push(choices);
        });
        this.chatbotResponse.push(surveyResponse);
        break;
      case 'yes-no':
      case 'drop-down':
      case 'legal':
        surveyResponse['question'] = dto.tag.questions[0];
        surveyResponse['questionType'] = dto.tag.id;
        surveyResponse['identifier'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['questionId'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['answer'] = dto.tag.value[0];
        this.chatbotResponse.push(surveyResponse);
        break;

      case 'date':
      case 'short-text':
      case 'long-text':
      case 'email':
      case 'phone-number':
      case 'number':
      case 'website':
        surveyResponse['question'] = dto.tag.questions[0];
        surveyResponse['questionType'] = dto.tag.id;
        surveyResponse['identifier'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['questionId'] = this.getQuestionIdentifier(dto.tag.name);
        surveyResponse['answer'] = dto.text;

        this.chatbotResponse.push(surveyResponse);
        break;
    }

  }

  private getQuestionIdentifier(str) {
    return str.split('-')[1];
  }

  submitCallback() {
    console.log(this.chatbotResponse);
    this.responseMetaInformation['completedAt'] = Date.now();
    this.responseMetaInformation['noOfQuestionAnswered'] = this.chatbotResponse.length;
    this.chatbotSurveyResponse['responses'] = this.chatbotResponse;
    this.chatbotSurveyResponse['surveyToken'] = '123';
    this.chatbotSurveyResponse['responseMetaInformation'] = this.responseMetaInformation;
    console.log(JSON.stringify(this.chatbotSurveyResponse));
    this.surveyService.submitSurveyResponse(this.chatbotSurveyResponse)
      .subscribe(response => console.log(response),
        error1 => console.log(error1));
  }

  private initializeSurveyTheme(surveyThemes: SurveyThemes) {
    document.documentElement.style.setProperty('--bg-color', surveyThemes.backgroundColor);
    document.documentElement.style.setProperty('--primary-color', surveyThemes.primaryColor);
    document.documentElement.style.setProperty('--primary-color-dark', surveyThemes.primaryColorDark);
    document.documentElement.style.setProperty('--text-color-primary', surveyThemes.textColorPrimary);
    document.documentElement.style.setProperty('--text-color-secondary', surveyThemes.textColorSecondary);
    document.documentElement.style.setProperty('--primary-button-text-color', surveyThemes.primaryButtonTextColor);
  }

  private initializePoweredByOmotoElement() {
    console.log('initializePoweredByOmotoElement');
    const poweredByOmotoContainerEl = document.createElement('div');
    poweredByOmotoContainerEl.classList.add('powered-by-omoto');
    const omotoLinkEl = document.createElement('a');
    omotoLinkEl.href = 'https://omoto.io/';
    omotoLinkEl.target = '_blank';
    const poweredByOmotoSpanEl = document.createElement('span');
    poweredByOmotoSpanEl.innerText = 'Powered by Omoto';
    omotoLinkEl.appendChild(poweredByOmotoSpanEl);
    poweredByOmotoContainerEl.appendChild(omotoLinkEl);
    const progressBarEl = document.getElementsByClassName('cf-progressBar');
    console.log(progressBarEl);
    progressBarEl[0].appendChild(poweredByOmotoContainerEl);
  }

  private initializeNPSNumericScaleLabels(timeInterval) {
    const npsLabelContainerEl = document.createElement('div');
    npsLabelContainerEl.classList.add('nps-label-container');
    const leftLabelEl = document.createElement('span');
    leftLabelEl.innerHTML = this.insertBRtagInNPSLabel(this.surveyProperties.surveyAttributes.npsLabels.leftLabel);
    const rightLabelEl = document.createElement('span');
    rightLabelEl.innerHTML = this.insertBRtagInNPSLabel(this.surveyProperties.surveyAttributes.npsLabels.rightLabel);
    npsLabelContainerEl.appendChild(leftLabelEl);
    npsLabelContainerEl.appendChild(rightLabelEl);
    const timeout = 3700 + 2000 * timeInterval;
    setTimeout(() => {
      const cfButtonEl = document.getElementsByClassName('cf-button');
      cfButtonEl[0].parentElement.classList.add('nps-label-container-parent');
      cfButtonEl[0].parentElement.appendChild(npsLabelContainerEl);
    }, timeout);
  }

  private insertBRtagInNPSLabel(str) {
    for (let i = 0; i < str.length; i++) {
      str = str.replace(' ', '<br>');
    }
    return str;
  }
}
