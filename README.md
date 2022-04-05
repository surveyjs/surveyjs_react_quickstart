# React quickstart boilerplate for SurveyJS: Survey Library and Survey Creator 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run this sample application
 - git clone https://github.com/surveyjs/surveyjs_react_quickstart.git
 - cd surveyjs_react_quickstart
 - npm i
 - npm start
 - open http://localhost:3000/ in your web browser



You can find the detailed information on how to perform common tasks in [this guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Add survey component on your page
```JavaScript
import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
//Import localization
import "survey-core/survey.i18n.js";
//Import Survey styles
import "survey-core/defaultV2.css";

class SurveyComponent extends Component {
    constructor() {
        super();
        const json = {
            elements: [
                { type: "text", name: "customerName", title: "What is your name?", isRequired: true }
            ]
        };
        this.survey = new Survey.Model(json);
        this.survey.onValueChanged.add((sender, options) => {
        console.log("value changed!");
        });
        this.survey.onComplete.add((sender, options) => {
        console.log("Complete! Response:" +  JSON.stringify(sender.data));
        });
    }
    render() {
        return <SurveyReact.Survey model={this.survey} />;
    }
} 
```
## Add creator component on your page
```JavaScript
import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreator from "survey-creator-react";
//Import Survey localization
import "survey-core/survey.i18n.js";
//Import Survey Creator localization
import "survey-creator-core/survey-creator-core.i18n.js";

//Import Survey and Creator styles
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

class CreatorComponent extends Component {
  constructor() {
    super();
    const json = {
        elements: [
            { type: "text", name: "customerName", title: "What is your name?", isRequired: true }
        ]
    };
    const options = { showLogicTab: true };
    this.creator = new SurveyCreator.SurveyCreator(options);
    this.creator.saveSurveyFunc = this.saveMySurvey;
    this.creator.JSON = json;
  }
  render() {
    return (<div>
      <SurveyCreator.SurveyCreatorComponent creator={this.creator} />
    </div>);
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
  };
}
```
