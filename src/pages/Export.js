import { Model } from "survey-core";
import { SurveyPDF } from "survey-pdf";

import { json } from "../data/survey_json.js";

function savePDF(model) {
  const surveyPDF = new SurveyPDF(json);
  surveyPDF.data = model.data;
  surveyPDF.save();
};

export function ExportToPDFPage() {
  const model = new Model(json);
  return (
    <div className="container">
      <h1>SurveyJS PDF Export</h1>
      <div className="jumbotron">
        <p>SurveyJS PDF Export is a client-side extension over the SurveyJS Library that enables users to save surveys as PDF documents.</p>
        <p>NOTE: Dynamic elements and characteristics (visibility, validation, navigation buttons) are not supported.</p>
        <p>Click the button below to export survey to a PDF document.</p>
        <button onClick={() => savePDF(model)}>Save as PDF</button>
      </div>
    </div>
  );
}
