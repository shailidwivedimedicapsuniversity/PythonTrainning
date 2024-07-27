import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.css']
})
export class SurveyResponseComponent implements OnInit {

  surveyContent: any;
  showSurvey = true;
  cssUrl: string;
  survey = {
    name: "Maiden survey",
    description: "",
    pages: [
      {
        "pageId": null,
        "pageName": "Welcome page",
        "properties": {
          "headingValue": "Welcome!",
          "subHeadingValue": "This is a sample survey design for us to visualise how the welcome page on the survey would look like. The welcome text could be as big as a paragraph like this or it could be just a couple of lines. The design must be minimalist and would focus on the use of great typeface to create beautiful design. Of course, the colour and theme is configurable.",
          "backgroundImage": "",
          "buttonText": "Let's Start!"
        },
        "questions": null
      },
      {
        "pageId": null,
        "pageName": "Questionnaire page",
        "properties": null,
        "questions": [
          {
            "questionId": -983398130,
            "questionType": "Nps",
            "question": "This is first question",
            "identifier": "1575269599502",
            "attributes": {
              "required": true,
              "description": null,
              "image": null,
              "video": null,
              "startScaleAt": 0,
              "leftLabel": "Unlikely",
              "centerLabel": "",
              "rightLabel": "Likely",
              "multipleChoice": false,
              "randomize": false,
              "others": false,
              "vertical": false,
              "alphabeticalSort": false,
              "defaultCountryCode": null,
              "ratingIcon": null,
              "maxCharacter": 0,
              "steps": null,
              "selection": null,
              "maxCharacterCount": 0,
              "minCharacterCount": 0,
            },
            "choices": null,
            "rating": 4,
            "logicJumps": {
              "blocks": [],
              "defaultJump": null,
              "defaultJumpIndex": null
            }
          },
          {
            "questionId": -983397665,
            "questionType": "Choice",
            "question": "This is second question",
            "identifier": "1575269599967",
            "attributes": {
              "required": false,
              "description": null,
              "image": null,
              "video": null,
              "startScaleAt": 0,
              "leftLabel": null,
              "centerLabel": null,
              "rightLabel": null,
              "multipleChoice": true,
              "randomize": false,
              "others": false,
              "vertical": true,
              "alphabeticalSort": false,
              "defaultCountryCode": null,
              "ratingIcon": null,
              "maxCharacter": 0,
              "steps": null,
              "selection": {
                "type": "Unlimited"
              },
              "maxCharacterCount": 0,
              "minCharacterCount": 0
            },
            "choices": [
              {
                "choiceId": 0,
                "text": "Option 1",
                "identifier": "1575269599967"
              },
              {
                "choiceId": 0,
                "text": "Option 2",
                "identifier": "1575269599967"
              },
              {
                "choiceId": 0,
                "text": "Option 3",
                "identifier": "1575269599967"
              },
              {
                "choiceId": 0,
                "text": "Option 4",
                "identifier": "1575269599967"
              }
            ],
            "logicJumps": {
              "blocks": [],
              "defaultJump": null,
              "defaultJumpIndex": null
            }
          },
        ]
      },
      {
        "pageId": null,
        "pageName": "Thank you page",
        "properties": {
          "headingValue": "Thank you !",
          "subHeadingValue": "This is a sample survey design for us to visualise how the welcome page on the survey would look like. The welcome text could be as big as a paragraph like this or it could be just a couple of lines. The design must be minimalist and would focus on the use of great typeface to create beautiful design. Of course, the colour and theme is configurable.",
          "backgroundImage": "",
          "buttonText": "Close"
        },
        "questions": null
      }
    ],
    selectedTheme: {
      "name": "Omoto Default",
      "isSelected": true,
      "colors": {
        "backgroundColor": "#ffffff",
        "primaryColor": "#4a4a4a",
        "primaryColorDark": "#3e3e3c",
        "footerBackgroundColor": "#f7f8f9",
        "primaryButtonTextColor": "#ffffff",
        "footerPrimaryColor": "#b8b9ba",
        "footerSecondaryColor": "#ffffff",
        "textColorPrimary": "#ffffff",
        "textColorSecondary": "#4a4a4a"
      },
      "font": {
        "name": "Muli",
        "url": "https://fonts.googleapis.com/css?family=Muli&display=swap"
      }
    },
    organizationLogo: ""
  };
  completedAt: Date;
  startedAt : Date;
  newSurveyContent = {}
  respondentIdentifier: any;
  testMode = false;
  surveyIdentifier: number;
  value : string;
  constructor(private pagesService: PagesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.startedAt = new Date();
    this.surveyIdentifier = this.activatedRoute.snapshot.params.surveyIdentifier;
    this.respondentIdentifier = this.activatedRoute.snapshot.params.respondentIdentifier;
    this.activatedRoute.queryParams.subscribe(params =>{
      this.value = params['value'];
  });
  
    this.pagesService.getSurvey(this.surveyIdentifier, this.respondentIdentifier, this.testMode)
      .subscribe(response => {
        if (response.surveyContent) {
          if(this.value){
          const newSurveyContent2 = JSON.parse(JSON.stringify(response.surveyContent));
          newSurveyContent2.pages = newSurveyContent2.pages.filter(page => page.pageName !== 'Welcome page');
          this.newSurveyContent = newSurveyContent2;
          this.showSurvey = false;
          }
          else{
            this.newSurveyContent = response.surveyContent;
            this.showSurvey = false;
          }
        }
      }, e => {
        console.log("error", e);
      });
  }
  async submitSurvey(response){
    this.completedAt = new Date();
    let ipAddress;

    await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
       ipAddress = data.ip;       
    });

    let respondentDetails = {
    "firstName": null,
    "lastName": null,
    "email": null,
    "phone": null,
    "ipAddress": ipAddress,
    };


    response.forEach(res => {
      if (res.questionType === "Short text") {
        respondentDetails.firstName = res.answer;
      }  if (res.questionType === "Email") {
        respondentDetails.email = res.answer;
      }  if (res.questionType === "Phone number") {
        respondentDetails.phone = res.answer;
      }
    });


    let metaInfo = {
      "completedAt": this.completedAt,
      "noOfQuestionAnswered": response.length,
      "platform": "string",
      "respondentId": 0,
      "responseDate": this.completedAt,
      "startedAt": this.startedAt,
      "surveyId": this.surveyIdentifier,
      "timeTakenInSeconds": 0
    }

    const appendedObject = {
      responseMetaInformation: metaInfo,
      responses: response,
      respondent : respondentDetails,
  };

  console.log("appendedObject",appendedObject);
  
    this.pagesService.submitResponse(appendedObject).subscribe(response => {
      },error => {
        console.log("error", error);
      });
  }

  emitResponse(response: any){
    this.submitSurvey(response);
  }
}
