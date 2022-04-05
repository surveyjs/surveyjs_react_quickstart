import React from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import "survey-core/defaultV2.css";

import { json } from "./survey_json.js";

Survey.StylesManager.applyTheme("defaultV2");

function onValueChanged(result) {
    console.log("value changed!");
}

function onComplete(result) {
    console.log("Complete! " + result);
}

export function SurveyPage() {
    var model = new Survey.Model(json);
    return (
        <div className="container">
            <h2>SurveyJS Library - a sample survey below</h2>
            <SurveyReact.Survey
                model={model}
                onComplete={onComplete}
                onValueChanged={onValueChanged}
            />
        </div>
    );
}
