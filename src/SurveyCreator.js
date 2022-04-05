import React, { Component, useState } from "react";
import * as Survey from "survey-core";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreatorReact from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

// Survey.StylesManager.applyTheme("defaultV2");

export default function SurveyCreator(props) {
  let [creator, setCreator] = useState();

  if (creator === undefined) {
    let options = { showEmbededSurveyTab: true, showLogicTab: true, showTranslationTab: true };
    creator = new SurveyCreatorReact.SurveyCreator(options);
    creator.saveSurveyFunc = (no, callback) => {
      console.log(JSON.stringify(creator.JSON));
      callback(no, true);
    };
    // this.creator.tabs().push({
    //   name: "survey-templates",
    //   title: "My Custom Tab",
    //   template: "custom-tab-survey-templates",
    //   action: () => {
    //     this.creator.makeNewViewActive("survey-templates");
    //   },
    //   data: {},
    // });
    setCreator(creator);
  }

  creator.JSON = props.json;

  return (<div style={{ height: "calc(100% - 70px)" }}>
    {/* <script type="text/html" id="custom-tab-survey-templates">
        {`<div id="test">TEST</div>`}
      </script> */}

    <SurveyCreatorReact.SurveyCreatorComponent creator={creator}></SurveyCreatorReact.SurveyCreatorComponent>

  </div>);
}
