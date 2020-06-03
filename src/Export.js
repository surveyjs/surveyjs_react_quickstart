import React from "react";

import $ from "jquery";

import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";
import * as SurveyPDF from "survey-pdf";

import { json } from "./survey_json.js";

//widgets.icheck(SurveyCore, $);
widgets.prettycheckbox(SurveyCore);
widgets.select2(SurveyCore, $);
widgets.inputmask(SurveyCore);
widgets.jquerybarrating(SurveyCore, $);
widgets.jqueryuidatepicker(SurveyCore, $);
widgets.nouislider(SurveyCore);
widgets.select2tagbox(SurveyCore, $);
//widgets.signaturepad(SurveyCore);
widgets.sortablejs(SurveyCore);
widgets.ckeditor(SurveyCore);
widgets.autocomplete(SurveyCore, $);
widgets.bootstrapslider(SurveyCore);

function savePDF(model) {
    var surveyPDF = new SurveyPDF.SurveyPDF(json);
    surveyPDF.data = model.data;
    surveyPDF.save();
};

export function ExportToPDFPage() {
    var model = new SurveyCore.SurveyModel(json);
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
  