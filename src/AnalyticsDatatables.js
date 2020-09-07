import React from "react";
import SurveyAnalyticsDatatables from "./SurveyAnalyticsDatatables";

export function AnalyticsDatatablesPage() {
  return (
    <div>
      <h2>Results Table - display survey results in the table form</h2>
      <span>Uses DataTables. Browsers compatibility: IE10+ </span>
      <SurveyAnalyticsDatatables />
    </div>
  );
}
