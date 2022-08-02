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

import * as Survey from "survey-core";
import $ from "jquery";

export { MyQuestion } from "./components/MyQuestion";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import "select2/dist/js/select2.js";
import "jquery-bar-rating";

// import "icheck/skins/square/blue.css";
// require("icheck");

import * as widgets from "surveyjs-widgets";

window["$"] = window["jQuery"] = $;
require("jquery-ui/ui/widgets/datepicker.js");

widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);
// widgets.icheck(Survey, $);

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
