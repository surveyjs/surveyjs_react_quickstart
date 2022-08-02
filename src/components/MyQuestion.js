import { Question, Serializer, ElementFactory } from "survey-core";
import { SurveyElementBase, ReactQuestionFactory } from "survey-react-ui";

const QUESTION_TYPE = "myquestion";

export function registerMyQuestion() {
  ElementFactory.Instance.registerElement(QUESTION_TYPE, (name) => {
    return new MyQuestionModel(name);
  });
}

export class MyQuestionModel extends Question {
  getType() {
    return QUESTION_TYPE;
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class MyQuestion extends SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    const cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <span>My Text Value: </span><span><b>{this.question.text}</b></span>
      </div>
    );
  }
}

Serializer.addClass(
  QUESTION_TYPE,
  [
    { name: "text" }
  ],
  function () {
    return new MyQuestionModel("");
  },
  "question"
);


ReactQuestionFactory.Instance.registerQuestion(QUESTION_TYPE, props => {
  return React.createElement(MyQuestion, props);
});
