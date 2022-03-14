import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
//Import localization
import "survey-core/survey.i18n.js";
//Import Survey styles
import "survey-core/defaultV2.css";

/* Uncomment to import custom widgets
import * as widgets from "surveyjs-widgets";
import "survey-core/defaultV2.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
//import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";
import "pretty-checkbox/dist/pretty-checkbox.css";
//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("jquery-ui/ui/widgets/datepicker.js");
//require("icheck");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

*/
import { json } from "./survey_json.js";

//Export new question with react rendering
export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("defaultV2");


class SurveyComponent extends Component {
    constructor() {
        super();
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


export function SurveyPage() {
    return (
    <div className="container">
    <h2>SurveyJS Library - a sample survey below</h2>
    <SurveyComponent />
    </div>
    );
  }
  