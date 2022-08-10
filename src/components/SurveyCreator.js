import { useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { registerMyQuestion } from "./MyQuestion";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

registerMyQuestion();

export default function SurveyCreatorWidget(props) {
  let [creator, setCreator] = useState();

  if (creator === undefined) {
    let options = { showLogicTab: true, showTranslationTab: true };
    creator = new SurveyCreator(options);
    creator.saveSurveyFunc = (no, callback) => {
      console.log(JSON.stringify(creator.JSON));
      callback(no, true);
    };
    // creator.tabs().push({
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

  return (
    <div style={{ height: "calc(100% - 70px)" }}>
      {/* <script type="text/html" id="custom-tab-survey-templates">
          {`<div id="test">TEST</div>`}
        </script> */}
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
