import { Component } from "react";
import { data, json } from "../data/analytics_data";
import { DataTables } from "survey-analytics/survey.analytics.datatables.js";
import { Model } from "survey-core";
import $ from "jquery";
import "datatables.net/js/jquery.dataTables.js";
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-colreorder/js/dataTables.colReorder.js";
import "datatables.net-rowgroup/js/dataTables.rowGroup.js";
import "datatables.net-colreorder-dt/css/colReorder.dataTables.css";
import "survey-analytics/survey.analytics.datatables.css";

export default class SurveyAnalyticsDatatables extends Component {
  visPanel;
  componentDidMount() {
    DataTables.initJQuery($);
    const survey = new Model(json);
    this.visPanel = new DataTables(survey, data);
    this.visPanel.render(document.getElementById("summaryContainer"));
  }
  render() {
    return <div id="summaryContainer"></div>;
  }
}
