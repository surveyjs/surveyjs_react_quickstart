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
//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";

class App extends Component {
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
  elements: [
   { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
  ]
 };

 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 render() {
  //Create the model and pass it into react Survey component
  //You may create survey model outside the render function and use it in your App or component
  //The most model properties are reactive, on their change the component will change UI when needed.
  var model = new Survey.Model(this.json);
  return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
 }
} 
```
