import React, { Component } from "react";
import * as SurveyJSEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";
import "surveyjs-editor/surveyeditor.css";
import * as widgets from "surveyjs-widgets";

widgets.signaturepad(SurveyKo);

class SurveyEditor extends Component {
  editor;
  componentDidMount() {
    let editorOptions = { showEmbededSurveyTab: true };
    this.editor = new SurveyJSEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }
  render() {
    return <div id="surveyEditorContainer" />;
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.editor.text));
  };
}

export default SurveyEditor;
