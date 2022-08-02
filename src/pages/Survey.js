import React from "react";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { json } from "../data/survey_json.js";

StylesManager.applyTheme("defaultV2");

function onValueChanged(_, options) {
  console.log("New value: " + options.value);
}

function onComplete(survey) {
  console.log("Survey complete! Results: " + JSON.stringify(survey.data));
}

export function SurveyPage() {
  const model = new Model(json);
  return (
    <div className="container">
      <h2>SurveyJS Library / Runner</h2>
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}
