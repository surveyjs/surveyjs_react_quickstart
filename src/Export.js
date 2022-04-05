import React from "react";
import * as Survey from "survey-core";
import * as SurveyPDF from "survey-pdf";

import { json } from "./survey_json.js";

function savePDF(model) {
  var surveyPDF = new SurveyPDF.SurveyPDF(json);
  surveyPDF.data = model.data;
  surveyPDF.save();
};

export function ExportToPDFPage() {
  var model = new Survey.Model(json);
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Export survey to a PDF document</h2>
        <p>
          The SurveyJS PDF Export library allows you to render SurveyJS Library surveys to PDF in
          a browser which can be later emailed or printed.
        </p>
        <p>Click the button below to get a PDF document.</p>
      </div>
      <div>
        <button onClick={() => savePDF(model)}>Save PDF</button>
      </div>
    </div>
  );
}
