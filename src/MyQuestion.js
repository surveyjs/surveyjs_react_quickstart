import React from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";

export class MyQuestionModel extends Survey.Question {
  getType() {
    return "myquestion";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class MyQuestion extends SurveyReact.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <span>My Text Value: </span><span><b>{this.question.text}</b></span>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "myquestion",
  [
    { name: "text" }
  ],
  function () {
    return new MyQuestionModel("");
  },
  "question"
);


SurveyReact.ReactQuestionFactory.Instance.registerQuestion("myquestion", props => {
  return React.createElement(MyQuestion, props);
});
