import SurveyCreator from "../components/SurveyCreator";

import { json } from "../data/survey_json.js";

export function CreatorPage() {
  return (
    <>
      <h1>Survey Creator / Form Builder</h1>
      <SurveyCreator json={json} />
    </>
  );
}
