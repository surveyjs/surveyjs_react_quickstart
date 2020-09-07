import React from "react";
import SurveyAnalyticsTabulator from "./SurveyAnalyticsTabulator";

export function AnalyticsTabulatorPage() {
  return (
    <div>
      <h2>Results Table - display survey results in the table form</h2>
      <span>Uses Tabulator. Supports modern browsers.</span>
      <SurveyAnalyticsTabulator />
    </div>
  );
}
