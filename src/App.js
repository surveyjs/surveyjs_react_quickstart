import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home";
import { CreatorPage } from "./pages/Creator";
import { SurveyPage } from "./pages/Survey";
import { ExportToPDFPage } from "./pages/Export";
import { AnalyticsPage } from "./pages/Analytics";
import { AnalyticsTabulatorPage } from "./pages/AnalyticsTabulator";
import { AnalyticsDatatablesPage } from "./pages/AnalyticsDatatables";

import "bootstrap/dist/css/bootstrap.css";

export { MyQuestion } from "./components/MyQuestion";

export default function SurveyJSReactApplication() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                SurveyJS + React
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/survey">Survey</Link>
              </li>
              <li>
                <Link to="/creator">Survey Creator</Link>
              </li>
              <li>
                <Link to="/export">PDF Export</Link>
              </li>
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
              <li>
                <Link to="/analyticstabulator">Results Table</Link>
              </li>
              <li>
                <Link to="/analyticsdatatables">
                  Results Table (IE Support)
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="app-content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/survey">
              <SurveyPage />
            </Route>
            <Route path="/creator">
              <CreatorPage />
            </Route>
            <Route path="/export">
              <ExportToPDFPage />
            </Route>
            <Route path="/analytics">
              <AnalyticsPage />
            </Route>
            <Route path="/analyticsdatatables">
              <AnalyticsDatatablesPage />
            </Route>
            <Route path="/analyticstabulator">
              <AnalyticsTabulatorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
