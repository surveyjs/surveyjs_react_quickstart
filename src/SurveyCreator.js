import React, { Component } from "react";
import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreator from "survey-creator-react";
//Import Survey localization
import "survey-core/survey.i18n.js";
//Import Survey Creator localization
import "survey-creator-core/survey-creator-core.i18n.js";

//Import Survey and Creator styles
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

/* Uncomment if you use custom widgets
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
// import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

//import "icheck/skins/square/blue.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "surveyjs-widgets";

window["$"] = window["jQuery"] = $;
require("jquery-ui/ui/widgets/datepicker.js");

SurveyJSCreator.StylesManager.applyTheme("default");

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

class CreatorComponent extends Component {
  constructor() {
    super();
    const options = { showLogicTab: true };
    this.creator = new SurveyCreator.SurveyCreator(options);
    this.creator.saveSurveyFunc = this.saveMySurvey;
    this.creator.JSON = json;
  }
  render() {
    return (<div>
      <SurveyCreator.SurveyCreatorComponent creator={this.creator} />
    </div>);
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.creator.text));
  };
}

export default CreatorComponent;
