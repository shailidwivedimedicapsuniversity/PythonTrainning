export class ChatbotModel {
  surveyPages: SurveyPages[];
  surveyProperties: SurveyProperties;
}


export class SurveyPages {
  identifier: number;
  tag: string;
  type: string;
  'cf-questions': string;
  'cf-input-placeholder': string;
  'survey-question-type': string;
  'cf-error': string;
  name: string;
  id: string;
  minlength: number;
  maxlength: number;
  required: boolean;
  pattern: string;
  children: Children[];
}

export class Children {
  tag: string;
  id: string;
  type: string;
  'cf-label': string;
  name: string;
  value: string;
  'cf-image': string;
}


export class SurveyProperties {
  organizationLogo: string;
  isOmotoBrandingEnabled: boolean;
  surveyThemes: SurveyThemes;
  surveyAttributes: SurveyAttributes;
}

export class SurveyThemes {
  backgroundColor: string;
  primaryColor: string;
  primaryColorDark: string;
  primaryButtonTextColor: string;
  textColorPrimary: string;
  textColorSecondary: string;
}


export class SurveyAttributes {
  npsLabels: NPSLabels;
}

export class NPSLabels {
  leftLabel: string;
  rightLabel: string;
}
