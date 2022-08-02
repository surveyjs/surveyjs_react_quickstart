import SurveyAnalyticsDatatables from "../components/SurveyAnalyticsDatatables";

export function AnalyticsDatatablesPage() {
  return (
    <div>
      <h1>Survey Analytics - Table View (old browsers support)</h1>
      <span>Uses DataTables (compatible with IE10+)</span>
      <SurveyAnalyticsDatatables />
    </div>
  );
}
